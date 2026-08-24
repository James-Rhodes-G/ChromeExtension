import { getAPI, sendLogMessage, postAPI, otherPostApi, createHeader, createRow, createRowWCheckbox, makeSelectAllListener} from "./utils.js";


//// Get a list of queues
export async function getQueues(pageSize=99, pageNumber=1) {
    const apiToCall = `/api/v2/routing/queues?pageSize=${pageSize}&pageNumber=${pageNumber}`;
    const response = await getAPI(apiToCall);
    return (response);
}

//// Write Queues to a table on log page
async function queueDataToTable (data) {
    const element = document.getElementById("logOutput");
    var table = document.querySelector('table');
    if (table === null ) {
        table = document.createElement("table");
        Object.assign(table, {id:"queue_export"});
        createHeader(table,['queueName', 'division','memberCount', 'call_AlertTimeout','call_serviceLevel%', 'call_SLDuration_sec'])
    };
    data['entities'].forEach(queue => {
        createRow(table, [
            queue.name,
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
        var response = await getAPI(apiToCall);
        await queueMemberDataToTable(queueName, response); 
        pageNumber ++;
    }
    while (response.nextUri);
    return
}

async function queueMemberDataToTable(queueName, data){
    const page = document.getElementById("logOutput");
    var table = document.querySelector('table');
    if (table === null ) {
        let qh = document.getElementById('qHeader');
        if (qh === null){
            qh = document.createElement("p");
            Object.assign(qh, {id:'qHeader'});
        }
        qh.innerText= queueName;
        table = document.createElement("table");
        Object.assign(table,{id:`queueMembers_${queueName}`});
        createHeader(table,['Name', 'division','department','userName', 'state','acdAutoAnswer', 'ringNumber']);
    };
    data['entities'].forEach(user => {
        createRow(table, [
            user.name,
            user.user.division.name,
            user.user.department,
            user.user.username,
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