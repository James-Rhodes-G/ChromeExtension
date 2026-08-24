import * as utils from "./utils.js"

async function getConversationData(convId) {
    const apiToCall= `/api/v2/analytics/conversations/details?id=${convId}`
    const resp = utils.getAPI(apiToCall);
    return resp
}


export async function printConversationData(convId){
    const exportBtn  = document.getElementById("exportButton")
    exportBtn.style.display = 'none';
    const data = await getConversationData(convId)
        .then((response) => { 
            //console.log(response)
            return response
        });
    console.log("Completed conv data")
    const element = document.getElementById("logOutput");
    const newField = document.createElement('div');
    newField.id='jsonBox';
    element.innerHTML = element.innerHTML + `<p><h3 id="success"> Conversation data for conversation ${convId}</h3></p>`;
    element.appendChild(newField);
    jQuery(document).ready(function() {
        jQuery("#jsonBox").jsonViewer(data, {withQuotes: true, rootCollapsable: true, collapsed:false});
    });
    
    
}