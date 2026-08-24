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
    const data = await getFlowExecutionAnalytics(convId);
    return(data.json())
}
