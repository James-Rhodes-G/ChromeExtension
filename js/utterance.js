import * as utils from './utils.js';


/*
    Get Bot Flows and present in a drop down box
    Get Utterances using get /api/v2/analytics/botflows/{botFlowId}/divisions/reportingturns (large page 250ish results)
    Display results in a table with headers like:
    https://genesys-confluence.atlassian.net/wiki/spaces/PSGP/pages/664929387/Bot+Utterance+Extraction+Tool
    Conv ID, Session ID, Date, Utterance (user Input), botPrompt (response), Action Number, actionType, language
    Add next page last page to bottom of page
    allow click on session id to run get /api/v2/analytics/botflows/{botFlowId}/sessions
    display using same headers
    allow click on actionId to return only that actionId (uses same API)
    allow click or sort on Action Results (uses same API) (maybe collect action results at top of page)
    allow click on conversation id to take you to the conversation in the workspace
    allow click on language to filter on language
*/

async function getBotFlows(pageNumber, pageSize){
    const apiToCall = `/api/v2/flows?type=bot,digitalbot&pageNumber=${pageNumber}&pageSize=${pageSize}`;
    console.log(apiToCall);
    const response = await utils.getAPI(apiToCall);
    return (response);
}

async function getBotUtterances(flowId,urlParams){
    if (!urlParams){
      var apiToCall = `/api/v2/analytics/botflows/${flowId}/divisions/reportingturns?pageSize=250`;  
    }else{
        var apiToCall = `/api/v2/analytics/botflows/${flowId}/divisions/reportingturns?pageSize=250&${urlParams}`; 
    }
    console.log(apiToCall);
    const response = await utils.getAPI(apiToCall);
    return (response);
}

async function getIntentHealth(flowId,versionId){
    const apiToCall = `/api/v2/flows/${flowId}/versions/${versionId}/health?pageSize=1`
    const response = await utils.getAPI(apiToCall);
    return (response);
}


/// Get queues and put them in a drop down list
async function getBotFlowsForDropDown(){
    var pageNumber=1
    var pageSize = 99
    console.log("extracting bot flows");
    //// Loop through pages and write them to a table on the log page
    const element = document.getElementById('logOutput');
    const qHeader = document.createElement("p");
    Object.assign(qHeader, {id:'qHeader'});
    let dropDownBox = document.createElement('select');
    do {
        var response = await getBotFlows(pageNumber, pageSize);
        //// append results to the dropdown box
        response.entities.forEach( flow => {
            if (!flow.publishedVersion){
                var version = ''
            } else {
                var version = flow.publishedVersion.id
            }
            const option = document.createElement("option");
            option.value = flow.id;
            option.text = `${flow.name} ver. ${version}`;
            dropDownBox.appendChild(option);
        })
        pageNumber ++;
    }
    while (response.lastUri != response.selfUri);
    element.appendChild(dropDownBox);
    let button = document.createElement("button")
    Object.assign(button, {class:"button",
    name: "queueMembers", id:"button", textContent: "Go"})
    element.appendChild(button);
    element.insertAdjacentElement("beforeend", qHeader);
    const exportBtn  = document.getElementById("exportButton")
    exportBtn.style.display = 'block';
    return(button, dropDownBox)
}

async function getUtterances(flowName, flowId){
    const resp = await getBotUtterances(flowId);
    displayUtterances(flowName, flowId, resp)
}
    


async function displayUtterances(flowName, flowId, resp){
    const page = document.getElementById("logOutput");
    var table = document.querySelector('tBody');
    const authData  = await utils.getAuthInfo();
    const region  = authData.region.replace('api','apps')
    if (table === null ) {
        var qh = document.getElementById('qHeader');
        if (qh === null){
            qh = document.createElement("p");
            Object.assign(qh, {id:'qHeader'});
            console.log(qh);
        }
        qh.innerHTML= `<a href=${region}/architect/#/inboundcall/flows/${flowId}/latest target="_blank">${flowName}</a>`;
        page.appendChild(qh);
        var tableDiv = document.createElement("table");
        Object.assign(tableDiv,{id:`botUtterance_${flowName}`});
        table = tableDiv.createTBody();
        utils.createHeader(table,['conversationId','sessionId','dateCompleted',
                                    'userInput', 'botPrompt', 'actionNumber', 'actionType','askActionResult']);
    };
    resp['entities'].forEach(utterance => {
        if (! utterance.hasOwnProperty('askAction')){
            var actionId = '';
            var actionNumber = '';
            var actionType = utterance.sessionEndDetails.type;
        } else {
            var actionId = utterance.askAction.actionId;
            var actionNumber = utterance.askAction.actionNumber;
            var actionType = utterance.askAction.actionType;
        }
        utils.createRow(table, [
            `<a href=${region}/directory/#/analytics/interactions/${utterance.conversation.id}/admin target="_blank">
                ${utterance.conversation.id}</a>`,
            `<a href=/log.html?func=utterances&sessionId=${utterance.sessionId}&flowId=${flowId}&flowName=${flowName} target="_blank">
                ${utterance.sessionId}</a>`,
            utterance.dateCompleted,
            utterance.userInput,
            utterance.botPrompts,
                `<a href=/log.html?func=utterances&askActionId=${actionId}&flowId=${flowId}&flowName=${flowName} target="_blank">
                                ${actionNumber}</a>`,
            actionType,
            `<a href=/log.html?func=utterances&askActionResults=${utterance.askActionResult}&flowId=${flowId}&flowName=${flowName} target="_blank">
                ${utterance.askActionResult}</a>`
        ])
        });
    page.appendChild(tableDiv);
    utils.displayExportButton();
    if (resp.nextUri){
        utils.showNextPageButton();
        var btn = document.getElementById('nextPage')
        btn.addEventListener('click',async function handleNextPage(){
            var table =  document.querySelector('table');
            if (table){
                table.remove();
            }
            utils.getAPI(resp.nextUri).then( (resp) => {
                console.log(resp);
                btn.removeEventListener('click',handleNextPage);
                displayUtterances(flowName, flowId, resp);
            });
        });
    }
    return
}


async function displayIntentHealth(flowName, flowId, resp){
    const page = document.getElementById("logOutput");
    var table = document.querySelector('tBody');
    const authData  = await utils.getAuthInfo();
    const region  = authData.region.replace('api','apps')
    if (table === null ) {
        var qh = document.getElementById('qHeader');
        if (qh === null){
            qh = document.createElement("p");
            Object.assign(qh, {id:'qHeader'});
        }
        qh.innerText= flowName;
        page.appendChild(qh);
        var tableDiv = document.createElement("table");
        Object.assign(tableDiv,{id:`intentHealth_${flowName}`});
        table = tableDiv.createTBody();
        utils.createHeader(table,['intentId','name','languageHealth']);
    };
    resp['intents'].forEach(intent => {
        let lH='';
        var keys = Object.keys(intent.languageHealth);
        keys.forEach( key =>{lH +=`${key}:${JSON.stringify(intent.languageHealth[key])}<br>`});
        utils.createRow(table, [
            intent.id,
            intent.name,
            lH
        ])
        });
    page.appendChild(tableDiv);
    utils.displayExportButton()
    if (resp.nextUri){
        utils.showNextPageButton();
        var btn = document.getElementById('nextPage')
        btn.addEventListener('click',async function handleNextPage(){
            var table =  document.querySelector('table');
            if (table){
                table.remove();
            }
            utils.getAPI(resp.nextUri).then( (resp) => {
                console.log(resp);
                btn.removeEventListener('click',handleNextPage);
                displayIntentHealth(flowName, flowId, resp);
            });
        });
    };
}

export async function utterances(urlParams=''){
    if (urlParams.size == 1 ){
        await getBotFlowsForDropDown();
        let button = document.getElementById("button");
        let dropDownBox = document.querySelector("select");
        button.addEventListener("click", function () {
            //// remove existing table, allows the users to quickly select additional bots
            var table = document.querySelector('table');
            if (table){
                table.remove();
            }
            const flowName = dropDownBox[dropDownBox.selectedIndex].text 
            if (flowName.indexOf('ver.')+4 ==flowName.length){
                alert(`${flowName} does not have a published version`)
                return;
            }
            getUtterances(dropDownBox[dropDownBox.selectedIndex].text, dropDownBox.value);
        })
    } else {
        let flowId = urlParams.get('flowId');
        let flowName = urlParams.get('flowName')
        urlParams.delete('func');
        urlParams.delete('flowId');
        const resp = await getBotUtterances(flowId, urlParams.toString());
        displayUtterances(flowName,flowId,resp);
    }
}

export async function intentHealth(urlParams){
    if (urlParams.size ==1 ){
        await getBotFlowsForDropDown();
        let button = document.getElementById("button");
        let dropDownBox = document.querySelector("select");
        button.addEventListener("click", function () {
            //// remove existing table, allows the users to quickly select additional bots
            var table = document.querySelector('table');
            if (table){
                table.remove();
            }
            const flowName = dropDownBox[dropDownBox.selectedIndex].text 
            if (flowName.indexOf('ver.')+4 ==flowName.length){
                alert(`${flowName} does not have a published version`)
                return;
            }
            const version = flowName.slice(flowName.indexOf('ver. ')+5,flowName.length)
            getIntentHealth(dropDownBox.value, version).then( (resp) => {
               console.log(resp);
               displayIntentHealth(flowName,dropDownBox.value,resp)   
            }) 
            
            
        })
    }
}