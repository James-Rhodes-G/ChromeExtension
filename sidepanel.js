
import { tempAlert, openTabNextToCurrent } from "./js/utils.js";
import { callSpoof } from "./js/callSpoof.js";


const quickNavBtn = {"people":"/directory/#/admin/directory/peopleV3", "queues":"/directory/#/admin/admin/organization/_queuesV2",
            "dataTables":"/directory/#/admin/routing/datatables", "sites":"/directory/#/admin/telephony/sites", 
            "tab_architect":"/architect/#/inboundcall/flows", "full_apiExp":"https://developer.genesys.cloud/devapps/api-explorer"
        }

//// Add Listener for Collapseable Container
export async function sidePanel (){
    var coll = document.getElementsByClassName("collapsible");
    var i;
//// Listener for Sidepanel Container open/collapse 
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
            content.style.maxHeight = null;
            } else {
            content.style.maxHeight = content.scrollHeight + "px";
            } 
        });
        }
//// Add listener for quick nav buttons
    var qbnBtns = document.getElementsByName("qbtn");
    var b; 
    for (b = 0; b < qbnBtns.length; b++) { 
        const objButton = new ButtonObjCreate(qbnBtns[b].id, qbnBtns[b].innerText, qbnBtns[b].name);
        qbnBtns[b].addEventListener("click", function(){
            quickNav(objButton)
        });
    }
//// Add listener for function buttons
    var qbnBtns = document.getElementsByName("funcBtn");
    var b; 
    for (b = 0; b < qbnBtns.length; b++) { 
        const objButton = new ButtonObjCreate(qbnBtns[b].id, qbnBtns[b].innerText, qbnBtns[b].name);
        qbnBtns[b].addEventListener("click", function(){
            funcButtons(objButton)
        });
    }
//// Add listener for to copy Customer Text
var qbnBtns = document.getElementsByName("custInfo");
var b; 
for (b = 0; b < qbnBtns.length; b++) { 
    const objButton = new ButtonObjCreate(qbnBtns[b].id, qbnBtns[b].innerText);
    qbnBtns[b].addEventListener("click", function(){
        let cx = event.clientX;
        let cy = event.clientY;
        textCopy(objButton, cx,cy);

    });
}
    getOrgInfo();
}  

//// Handle Quick Navigtion Button Clicks
async function quickNav(btnPress){
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    let webSite = (new URL(tabs[0].url).origin);
    const newPage = webSite + quickNavBtn[btnPress.id];
    if (btnPress.id.includes("full_") ) {
        await openTabNextToCurrent(quickNavBtn[btnPress.id]);
    }else if (btnPress.id.includes("tab_")){
        await openTabNextToCurrent(newPage); 
    }else {
        console.log(newPage);
        chrome.tabs.update( tabs[0].id, {url:newPage});
    }
    


}

//// Handle Function Button Clicks
async function funcButtons(btnPress){
    if (btnPress.id == 'callSpoof'){
            const inputBoxes = document.getElementsByTagName("input");
            callSpoof(inputBoxes);
    } else if (btnPress.id =='printConversationData'){
        const inputBoxes = document.getElementsByTagName("input").convData.value;
        await chrome.runtime.sendMessage([btnPress.id, inputBoxes], (response) => {
            console.log(response);
        });
    }else {
            await chrome.runtime.sendMessage([btnPress.id], (response) =>{
        console.log(response);    
        });
    }


}

function textCopy(fieldName, cx, cy){
    var copyText = document.getElementById(fieldName.id)
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.innerText);
    // Alert the copied text
    tempAlert(`Copied to the Clipboard`,3000,cx,cy);
}

//// Create Button Objects
function ButtonObjCreate (id='', text='', name=''){
    this.name = name;
    this.id = id;
    this.text = text;
}

async function getOrgInfo() {
    //// Get active tab
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    const tab = tabs[0];
    //Send message to background worker to reterive ORG infor to update
    // extension showing which customer we are working with.
    const fromPageLocalStore = await chrome.scripting.executeScript({ 
        target: { tabId: tab.id }, function: () => sessionStorage['gcui_auth'] });
    // Store the result  
    await chrome.storage.local.set({['pc_auth']:fromPageLocalStore[0].result});
    let region = (new URL(tab.url).origin).replace("apps","api");
    await chrome.storage.local.set({['region']: region});
    const tokenElement = document.getElementById('token');
    const regionElement = document.getElementById('region');
    const token = fromPageLocalStore[0].result;
    regionElement.textContent = region;
    tokenElement.textContent = token;
    const orgNameElement = document.getElementById('OrgName');
    const orgIdElement = document.getElementById('OrgId');
    let response = await chrome.runtime.sendMessage(['orgMe']);
    orgNameElement.textContent = response.name;
    orgIdElement.textContent = response.id;
    console.log(`this is the orgInfo ${response}`);
    await chrome.storage.local.set({['orgName']: response.thirdPartyOrgName});        
    return response;
};

await sidePanel();