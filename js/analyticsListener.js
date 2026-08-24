


async function addDiscoButton(){

    if (document.getElementsByClassName("dt-bulk-action-btn btn btn-primary disconnectCalls").length === 0){
        let targetButton = await document.getElementsByClassName("dt-bulk-actions");
        
        //// create button to insert in to the bulkActionsBox
        var btnCont = document.createElement("button");
        btnCont.setAttribute("class", "dt-bulk-action-btn btn btn-primary disconnectCalls");
        
        //// creates the div that we place the button into and sets class and text
        btn = document.createElement('div')
        btn.setAttribute("class", "icon-container");
        btn.innerText='                    Disconnect                ';
        //// appends the div to the button
        btnCont.appendChild(btn);
        
        //// get the bulk actions bar
        
        //// put our button in the bar
        targetButton[0].insertAdjacentElement("afterbegin",btnCont);
        btnCont.addEventListener("click", function(){
           let checkBoxes = getCheckBoxes();
           disconnectInteractions(checkBoxes);
       })
    } else{ }
}

async function addLogoffButton() {
  
    // get the button field we want
    let btnClass = document.getElementsByClassName("primary-controls");
    // create button element
    let d=Object.assign(document.createElement("button"), {'className':'btn btn-default btn-sm'});
    let bl=Object.assign(document.createElement('div'), {'className':'btn-label'});
    let s = Object.assign(document.createElement('span'),{'innerText':'Logoff'});
    // inject button element
    bl.appendChild(s);
    d.appendChild(bl);
    btnClass[0].insertAdjacentElement('afterBegin', d); 
    btnClass[0].addEventListener("click", function(){
      let checkBoxes = getCheckBoxes();
      if (checkBoxes){
        console.log(checkBoxes)
        logoffUsers(checkBoxes)
      }
    })
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

async function disconnectInteractions(interactions){
    let conversationIds=[];
    interactions.forEach( interaction => {
        let interactionId = interaction.offsetParent.className.slice(-36);
        if(interactionId.includes('dt-row')){
          // eliminatates the Select All row
        }else{
          console.log(interactionId);
          conversationIds.push(interaction.offsetParent.className.slice(-36));
        }
      })
      //// Write to localstorage so we can reterive it from the log page
        await chrome.storage.local.set({'conversationData':JSON.stringify(conversationIds)});
        
        // Send Message to background to open log tab
        chrome.runtime.sendMessage(['disco']);
}

async function logoffUsers(users) {
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
        addButton();
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
            if (newElement.className.includes("protect")) {
              //console.log(newElement.className);
                addDiscoButton();
              }else if (newElement.id.includes("directory-people-index")){
                //console.log('found the controls')
                addLogoffButton();
              }else if (newElement.className.includes('arch')){
                if (document.querySelector("#main-view > ui-view > arch-flows-view > div > div > div.navbar-form.arch-toolbar")){
                  console.log('found architect page')
                  addRepublishButton();
                }

              }
          } catch {
              
          }
        }
    });
  });
  observer.observe(targetNode, config);
}	

console.log("disco listener is loaded v3")

observeNewElement('div.example', (newElement) => {
  console.log('New element added:', newElement);
});
		