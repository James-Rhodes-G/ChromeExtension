import * as utils from './utils.js';


 async function getFlowExecutionAnalytics (convId){
    const apiToCall = `/api/v2/flows/instances/query?pageSize=200`
    const postBody = {
        "query": [
            {
            "criteria": {
                "key": "ConversationId",
                "operator": "eq",
                "value": convId
                }
            }
        ]
        }
     const resp = await utils.otherPostApi(apiToCall, postBody);
     return resp;
}


export async function flowExecution (convId){
    console.log(convId.get('id'));
    let region = await chrome.storage.local.get('region');
    getFlowExecutionAnalytics(convId.get('id'))
        .then (response => response.json())
        .then ( data => {
                makeDisplayPage(data,region.region.replace('api','apps'));
        })
        .catch( error =>{
            console.log("error:", error);
    })

}

function makeDisplayPage(data, region){
    //console.log(data)
    const element = document.getElementById("logOutput");
    const exportBtn  = document.getElementById("exportButton")
    exportBtn.style.display = 'block';
    var table = document.querySelector('table');
    if (table === null ) {
        element.innerHTML += `<p><h3>Flow Execution Data for <b>${data.entities[0].conversationId}</b></h3></p>`;
        table = utils.createGuxTable(`flowExecution_${data.entities[0].conversationId}_export`);
        utils.createHeader(table[1],["FlowName","FlowVersion","FlowType","Start Date Time","End Date Time", "Error Reason"])
        element.appendChild(table[0]).appendChild(table[1]);
    };
    data.entities.forEach( entity => {
        utils.createRow(table[1],
            //`<a href=${region}/directory/#/admin/routing/scheduling/schedules/${response.id.replace('.','').slice(-36)} _target=blank>${response.name}</a>` 
            [`<a href="${region.replace('api','apps')}/architect/#/flowInstance/${entity.id}" target="_blank">${entity.flowName}`,
                entity.flowVersion, entity.flowType,
            entity.startDateTime,entity.endDateTime,entity.flowErrorReason]
            )
    })
}
