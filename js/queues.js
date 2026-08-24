
import * as utils from './utils.js';

//// Get a list of queues
export async function getQueues(pageSize=99, pageNumber=1) {
    const apiToCall = `/api/v2/routing/queues?pageSize=${pageSize}&pageNumber=${pageNumber}`;
    const response = await utils.getAPI(apiToCall);
    return (response);
}

//// Write Queues to a table on log page
async function queueDataToTable (data) {
    const authData  = await utils.getAuthInfo();
    const region  = authData.region.replace('api','apps')
    console.log(region);
    const element = document.getElementById("logOutput");
    var table = document.querySelector('table');
    if (table === null ) {
        table = document.createElement("table");
        Object.assign(table, {id:"queue_export"});
        utils.createHeader(table,['queueName', 'division','memberCount', 'call_AlertTimeout','call_serviceLevel%', 'call_SLDuration_sec'])
    };
    data['entities'].forEach(queue => {
        utils.createRow(table, [
            `<a href=${region}/directory/#/admin/organization/queues/${queue.id} target="_blank">${queue.name}</a>`,
            queue.division.name,
            queue.memberCount,
            queue.mediaSettings.call.alertingTimeoutSeconds,
            (queue.mediaSettings.call.serviceLevel.percentage * 100),
            (queue.mediaSettings.call.serviceLevel.durationMs / 1000)
        ])
        });
    element.appendChild(table);
}

//// Get queues and put them in a drop down list
async function getQueuesDropDown(){
    var pageNumber=1
    var pageSize = 99
    console.log("extracting queues");
    //// Loop through pages and write them to a table on the log page
    const element = document.getElementById('logOutput');
    const qHeader = document.createElement("p");
    Object.assign(qHeader, {id:'qHeader'});
    let dropDownBox = document.createElement('select');
    do {
        var response = await getQueues(pageSize,pageNumber);
        //// append results to the dropdown box
        response.entities.forEach( queue => {
            const option = document.createElement("option");
            option.value = queue.id;
            option.text = queue.name;
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
    button.addEventListener("click", function () {
        console.log("button");
        //// remove existing table, allows the users to quickly select additional queues
        var table = document.querySelector('table');
        if (table){
            table.remove();
        }
        getMembersOfQueue(dropDownBox[dropDownBox.selectedIndex].text, dropDownBox.value);
    })
}

//// Get a list of queue memebers and display them
export async function getMembersOfQueue(queueName, queueId){
    var pageNumber=1
    var pageSize = 99
    console.log("exporting queue members");
    //// Loop through pages and write them to a table on the log page
    do {
        const apiToCall = `/api/v2/routing/queues/${queueId}/members?expand=skills&pageNumber=${pageNumber}&pageSize=${pageSize}`
        var response = await utils.getAPI(apiToCall);
        //console.log(response);
        await queueMemberDataToTable(queueName, queueId, response); 
        pageNumber ++;
    }
    while (response.nextUri);
    return
}

async function queueMemberDataToTable(queueName, queueId, data){
    const page = document.getElementById("logOutput");
    var table = document.querySelector('table');
    const authData  = await utils.getAuthInfo();
    const region  = authData.region.replace('api','apps');
    if (table === null ) {
        let qh = document.getElementById('qHeader');
        if (qh === null){
            qh = document.createElement("p");
            Object.assign(qh, {id:'qHeader'});
        }
        qh.innerHTML= `<a href=${region}/directory/#/admin/organization/queues/${queueId}/members target="_blank">${queueName}</a>`,queueName;
        table = document.createElement("table");
        Object.assign(table,{id:`queueMembers_${queueName}`});
        utils.createHeader(table,['Name', 'division','department','userName', 'state','acdAutoAnswer', 'ringNumber']);
    };
    data['entities'].forEach(user => {
        utils.createRow(table, [
            user.name,
            user.user.division.name,
            user.user.department,
            `<a href=${region}/directory/#/admin/directory/peopleV2/${user.user.id} target="_blank">${user.user.id}</a>`,
            user.user.state,
            user.user.acdAutoAnswer,
            user.ringNumber
        ])
        });
    page.appendChild(table);
    return
}

export async function exportQueues(){
    var pageNumber=1
    var pageSize = 99
    console.log("exporting queues");
    //// Loop through pages and write them to a table on the log page
    do {
        var response = await getQueues(pageSize,pageNumber);
        await queueDataToTable(response); 
        pageNumber ++;
    }
    while (response.lastUri != response.selfUri);
    const exportBtn  = document.getElementById("exportButton")
    exportBtn.style.display = 'block';
}

export async function exportQueueUsers(){
    getQueuesDropDown();
}