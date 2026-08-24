


async function addButton(){

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

function getCheckBoxes(){
    //window.focus(myFrame);
    checkBoxes=document.querySelectorAll('input[type="checkbox"]:checked');
    return checkBoxes;
}

async function disconnectInteractions(interactions){
    let conversationIds=[];
    interactions.forEach( interaction => {
        let interactionId = interaction.offsetParent.className.slice(-36);
        if(interactionId.includes('dt-row')){

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
          try {
            if (newElement.className.includes("protect")) {
              //console.log(newElement.className);
                addButton();
              }
          } catch {
              
          }
        }
    });
  });
  observer.observe(targetNode, config);
}	

console.log("disco listener is loaded")
observeNewElement('div.example', (newElement) => {
  console.log('New element added:', newElement);
});
		