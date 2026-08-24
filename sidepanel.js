
import * as utils from './js/utils.js';
import { callSpoof } from "./js/callSpoof.js";

const defualt_btnData = {
        "quickNav": {
            "QuickNav1_Label": "Roles",
            "QuickNav1_URL": "/directory/#/admin/people-permissions/roles",
            "QuickNav2_Label": "People",
            "QuickNav2_URL": "/directory/#/admin/directory/peopleV3",
            "QuickNav3_Label": "Queues",
            "QuickNav3_URL": "/directory/#/admin/admin/organization/_queuesV2",
            "QuickNav4_Label": "Data Tables",
            "QuickNav4_URL": "/directory/#/admin/routing/datatables",
            "QuickNav5_Label": "Architect",
            "QuickNav5_URL": "/architect/#/inboundcall/flows",
            "QuickNav5_radio": "newTab",
            "QuickNav6_Label": "API Explorer",
            "QuickNav6_URL": "https://developer.genesys.cloud/devapps/api-explorer",
            "QuickNav6_radio": "newTab"
        }
    }


export async function sidePanel (){


//// Add listener for quick nav buttons
    let btnData = await chrome.storage.local.get("quickNav");
    if (Object.keys(btnData).length === 0){ 
        console.log("Using Button Defaults")
        btnData = defualt_btnData;
        chrome.storage.local.set(btnData);
    };
    var qbnBtns = document.getElementsByName("qbtn");
    var b; 
    for (b = 0; b < qbnBtns.length; b++) { 
        const objButton = new ButtonObjCreate(qbnBtns[b].id, qbnBtns[b].innerText, qbnBtns[b].name);
        if (btnData.quickNav[qbnBtns[b].id +'_Label'] !=''){
            qbnBtns[b].innerHTML = btnData.quickNav[qbnBtns[b].id +'_Label'];
            qbnBtns[b].addEventListener("click", function(){
                if(Object.keys(btnData.quickNav).includes(objButton.id+'_radio')){               
                    quickNav(btnData.quickNav[objButton.id+'_URL'], true);
                }else{ 
                    quickNav(btnData.quickNav[objButton.id+'_URL'], false);
                }
            });
        } else {
            qbnBtns[b].style.display = 'none';
            console.log('skipping '+qbnBtns[b].id )
        }

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

//// Add listener and fill in form data for callspoof
    let fieldList = ["outClid", "outCnam", "outDial"];

    fieldList.forEach( async field => {
        /// need to get from storage
        let data = await chrome.storage.local.get(field);
        //let dataList = document.querySelector('#'+field+'List');
        // create list of options in the dataList
        createDataList(data[field], field);
        //// need to add onChange listener to write datato storage
        let textBox = document.getElementById(field);
        textBox.onchange = function(){
            console.log(event.target.value, data[field], field)
            cleanArraySendToStorage(event.target.value, field);
        }
    })

    getOrgInfo();
}  

//// Handle Quick Navigtion Button Clicks
async function quickNav(btnPress, newTab){
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    let webSite = (new URL(tabs[0].url).origin);
    const newPage = webSite + btnPress;
    if (btnPress.substr(0,4).toLowerCase() == 'http'){
        //console.log(btnPress, 'New Tab');
        await utils.openTabNextToCurrent(btnPress);
    }else if (newTab){
        //console.log(newPage, 'New Tab')
        await utils.openTabNextToCurrent(newPage); 
    }else {
        //console.log(newPage, 'Same Tab');
        chrome.tabs.update( tabs[0].id, {url:newPage});
    }
}

//// Handle Function Button Clicks
async function funcButtons(btnPress){
    if (btnPress.id == 'callSpoof'){
            const inputBoxes = document.querySelectorAll("#outClid,#outCnam,#outDial");
            callSpoof(inputBoxes);
    } else if (btnPress.id =='printConversationData' || btnPress.id =='goToInteraction' || btnPress.id =='goToFlowExecution'){
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
    regionElement.textContent = region.slice(12);
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

function createDataList(data, field){
    let dataList = document.querySelector('#'+field+'List');
    dataList.replaceChildren();
    try {
            data.forEach( entry => {
        let opt = document.createElement('option');
        opt.value = entry;
        dataList.appendChild(opt);
    })
    }catch(error){
        console.log(error);
    }

}

async function cleanArraySendToStorage(value,field){
    let data = await chrome.storage.local.get(field);
    var newArr
    try{
        newArr = data[field].splice(0,0,value);
        newArr = [... new Set(data[field])];
    } catch(error){
        newArr=[value];
    }
    if (newArr.length >= 10){
        newArr.pop()
    }
    createDataList(newArr, field);
    await chrome.storage.local.set({[field]:newArr});
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) =>{
    testRequest(request).then(sendResponse);
    //console.log(request, sender).then(sendResponse);
    return true;
  });

async function testRequest(request){
    console.log(`sidepanel received:  ${request.action}, ${request.data}`);
    switch(request.action) {
        case "toggleDisco":
            var btn = document.getElementById("disconnect");
            var resp = utils.toggleButtonStatus(btn, request.data)
            return resp;

        case "toggleLogoff":
            var btn = document.getElementById("logoff");
            var resp = utils.toggleButtonStatus(btn, request.data)
            return resp;
        // case "analytics":
        //     analyticsListener();
        //     return;

        default:
            console.log("sidepanel is ignoring you"); 
        }
}



await sidePanel();