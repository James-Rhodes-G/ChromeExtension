


async function enableButton(newElement, btnType){
  //console.log(btnType);
      newElement.addEventListener("click", function (){
        let checkBoxes = getCheckBoxes();
        if (checkBoxes.length > 0){
          chrome.runtime.sendMessage({action: `toggle${btnType}`, data:"enable"});
        } else{
          chrome.runtime.sendMessage({action: `toggle${btnType}`, data:"disable"});
        }
      })
}

let autoDisableResultsSettings = false;
let resultsSettingsControlLogged = false;

async function loadResultsSettingsPreference() {
  try {
    const data = await chrome.storage.local.get("analyticsOptions");
    autoDisableResultsSettings = !!(data.analyticsOptions && data.analyticsOptions.autoDisableResultsSettings);
  } catch (error) {
    console.log('unable to read analytics options', error);
    autoDisableResultsSettings = false;
  }
}

chrome.storage.onChanged.addListener((changes, area) => {
  if (area !== 'local' || !changes.analyticsOptions) {
    return;
  }
  const nextValue = changes.analyticsOptions.newValue || {};
  autoDisableResultsSettings = !!nextValue.autoDisableResultsSettings;
});

function ensureResultsSettingsFalse() {
  if (!autoDisableResultsSettings) {
    return false;
  }
  try {
    const key = 'results-settings-v2';
    const currentValue = localStorage.getItem(key);
    console.log('results-settings-v2 value', currentValue);
    if (currentValue === null) {
      return false;
    }
    if (currentValue !== 'false') {
      localStorage.setItem(key, 'false');
    }
    return true;
  } catch (error) {
    console.log('unable to update results settings', error);
    return false;
  }
}

function logResultsSettingsControl() {
  if (resultsSettingsControlLogged) {
    return;
  }

  const selectors = [
    '.result-settings-v2-toggle',
    '#ember2120',
    '[data-testid*="results-settings"]',
    '[data-test*="results-settings"]',
    '[data-qa*="results-settings"]',
    '[id*="results-settings"]',
    '[class*="results-settings"]'
  ];

  const match = selectors
    .map(selector => document.querySelector(selector))
    .find(Boolean);

  if (match) {
    resultsSettingsControlLogged = true;
    console.log('results settings control detected', match);
  }
}


async function addRepublishButton() {
  if (document.getElementsByClassName("republishFlowButton").length === 0) {
      const toolbar = document.querySelector("#main-view > ui-view > arch-flows-view > div > div > div.navbar-form.arch-toolbar")
      let outterDiv = document.createElement('gux-button');
      outterDiv.setAttribute("accent","secondary");
      outterDiv.setAttribute("data-inintest","republishFlowButton");
      outterDiv.setAttribute("class","republishFlowButton");
      outterDiv.setAttribute("disabled",true);
      // Object.assign(outterDiv,{"accent":"secondary", "data-inintest":"republishFlowButton",
      //                   "class":"userAction"});
      let innerDiv = Object.assign(document.createElement("div"),{'className':'flex-row-centered'});

      let btnText = Object.assign(document.createElement("span"), {'className':'flex-all text-ellipsis',
                                                                'innerText':'Republish'});
      innerDiv.appendChild(btnText);
      outterDiv.appendChild(innerDiv);
      toolbar.insertBefore(outterDiv,toolbar.childNodes[toolbar.childNodes.length-5])
  }

}  

function getCheckBoxes(){
    //window.focus(myFrame);
    let checkBoxes=document.querySelectorAll('input[type="checkbox"]:checked');
    return checkBoxes;
}

async function disconnectInteractions(){
    let interactions = getCheckBoxes();
    console.log(interactions);
  // let iframe = Array.from(document.querySelectorAll('iframe')).find(el => el.title ==="Analytics UI")
  // let interactions = iframe.contentWindow.document.querySelectorAll('input[type="checkbox"]:checked')
    let conversationIds=[];
    interactions.forEach( interaction => {
        if(interaction.className.includes('dt-row-select-all')){
          // eliminatates the Select All row
        }else{
          let interactionId = interaction.parentNode.parentElement.className.slice(-36);
          console.log(interactionId);
          conversationIds.push(interactionId);
        }
      })
      //// Write to localstorage so we can reterive it from the log page
       await chrome.storage.local.set({'conversationData':JSON.stringify(conversationIds)});
        
      //  Send Message to background to open log tab
        chrome.runtime.sendMessage(['disco']);
      return(conversationIds);
}

async function logoffUsers() {
  // let iframe = Array.from(document.querySelectorAll('iframe')).find(el => el.title ==="admin")
  // let users = iframe.contentWindow.document.querySelectorAll('input[type="checkbox"]:checked')
  let users = getCheckBoxes();
  let userIds = [];
  users.forEach( user => {
    if (!user.outerHTML.includes("pageSelected")){
      let userId = user.parentElement.parentElement.parentElement.children[1].childNodes[0].childNodes[2].childNodes[0].href.slice(-36);
      userIds.push(userId);
    }
  })
  console.log(userIds);

  //// Write to localstorage so we can reterive it from the log page
  await chrome.storage.local.set({'userData':JSON.stringify(userIds)});
  // Send Message to background to open log tab
  chrome.runtime.sendMessage(['userLogoff']);
}

//// listen for any change to the page.... then see if we can only detect when a bulk action box pops up
function getMyIFrame(iframes){
    for(let i=0; i < iframes.length; i++){
       	try{
    		iframes[i].frameElement.title
    		if (iframes[i].frameElement.title === 'Analytics UI'){ 
                return i
            };
    	} catch (error){
        };
    };
};

function checkForCheckBoxes(ibEvents){
    bulkActionsBox = ibEvents[0].getElementsByClassName("dt-bulk-actions");
    console.log(ibEvents[1]);
    if (ibEvents[1].target.className === "dt-row-checkbox" && bulkActionsBox.length > 0){
        addDiscoButton();
    }
}

function observeNewElement(selector, callback) {
  const targetNode = document.documentElement;
  const config = { childList: true, subtree: true };
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length > 0) {
        const newElement = mutation.addedNodes[0];
        //console.log(newElement);
          try {
            if (selector == "analytics") {
                ensureResultsSettingsFalse();
                enableButton(newElement,'Disco');
              } else if (selector == "people"){
                enableButton(newElement, 'Logoff');
              }
            } catch {
              //console.log('some error occured')
          }
        }
    });
  });
  observer.observe(targetNode, config);
}	

async function testRequest(request){
  console.log(request);
  switch(request.action) {
    case "interactionIds":
      var discoResp = await disconnectInteractions()
      return discoResp;
    case "logoffUserIds":
      var discoResp = await logoffUsers()
      return discoResp;
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) =>{
  testRequest(request).then(sendResponse);
  return true;
});

function classifyURL(tab){
  if (tab.includes('analytics-ui') || tab.includes('/analytics/') || tab.includes('#/analytics')) return 'analytics';
  if (tab.includes('peopleV3')) return 'people';
  return

}

  console.log('analytics listener loaded');
  const tab = window.location.href;
  let pageClassification = classifyURL(tab);
  console.log(pageClassification,tab);
  switch(pageClassification) {
    case 'analytics':
      //console.log(pageClassification);
      var activeListener = true;
      var element = 'analytics';
      break;
    case 'people':
      //console.log(pageClassification);
      var activeListener = true;
      var element = 'people';
      break;
    default:
      var activeListener = false;
  }
  if (activeListener) {
    console.log('firing up listener')
    loadResultsSettingsPreference();
    const settingsInterval = setInterval(() => {
      logResultsSettingsControl();
      if (ensureResultsSettingsFalse()) {
        clearInterval(settingsInterval);
      }
    }, 1000);
    observeNewElement(element, (newElement) => {
      console.log('New element added:', newElement);
    });
  }else{

  }
