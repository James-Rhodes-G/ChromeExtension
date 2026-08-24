import { getAPI, sendLogMessage, postAPI, otherPostApi, patchAPI, createHeader, 
    createHeaderWCheckbox, createRow, createRowWCheckbox, makeTableRowsClickable, makeSelectAllListener} from "./utils.js";


async function callDiscoAPI(interactionId){
    let apiToCall = `/api/v2/conversations/${interactionId}/disconnect`;
    let response = otherPostApi(apiToCall, {});
    return response;
}
// 

async function disconnectAllInteractions(convIDs){
    const table = document.createElement('table');
    Object.assign(table, {id:"callDisconnect"});
    const header = createHeader(table,["conversationID", "status"]);
    const element = document.getElementById('logOutput').appendChild(table);;
    convIDs.forEach( async function(conv) {
        let resp = await callDiscoAPI(conv);
        if(resp.ok){
            createRow(table, [conv, resp.status]);
        }else{
            createRow(table,[conv, resp.status]);
        };
    });
        //// show export button
        document.getElementById('exportButton').style.display="block";

};






export async function disconnectInteractions(){
    const conversationData = await chrome.storage.local.get('conversationData');
    const convIDs = JSON.parse(conversationData.conversationData);

    if (confirm(`This action will teminate ${convIDs.length} interactions.  Are you sure?`)){
        await disconnectAllInteractions(convIDs);
    }else{
        let pageData = document.getElementById('logOutput');
        pageData.innerText += "Action Canceld By User";
    };
    
}