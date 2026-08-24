
import * as utils from './utils.js';


async function callDiscoAPI(interactionId){
    let apiToCall = `/api/v2/conversations/${interactionId}/disconnect`;
    let response = utils.otherPostApi(apiToCall, {});
    return response;
}
// 

async function disconnectAllInteractions(convIDs){
    const table = document.createElement('table');
    Object.assign(table, {id:"callDisconnect"});
    utils.createHeader(table,["conversationID", "status"]);
    document.getElementById('logOutput').appendChild(table);;
    convIDs.forEach( async function(conv) {
        let resp = await callDiscoAPI(conv);
        if(resp.ok){
            utils.createRow(table, [conv, resp.status]);
        }else{
            utils.createRow(table,[conv, resp.status]);
        };
    });
        //// show export button
        document.getElementById('exportButton').style.display="block";

};






export async function disconnectInteractions(){
    const conversationData = await chrome.storage.local.get('conversationData');
    const convIDs = JSON.parse(conversationData.conversationData);
    await chrome.storage.local.remove('conversationData');
    if (confirm(`This action will teminate ${convIDs.length} interactions.  Are you sure?`)){
        await disconnectAllInteractions(convIDs);
    }else{
        let pageData = document.getElementById('logOutput');
        pageData.innerText += "Action Canceld By User";
    };
}


export async function getDiscoInteractions(){
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    const response = await chrome.tabs.sendMessage(tab.id, {action:"interactionIds"});
    console.log(response)
}