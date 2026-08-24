
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
    const element = document.getElementById("logOutput"); 
    const table = utils.createGuxTable("queue_export");
    element.appendChild(table[0]).appendChild(table[1]);
    utils.createHeader(table[1],['queueName', 'division','memberCount', 'call_AlertTimeout','call_serviceLevel%', 'call_SLDuration_sec'])
    data['entities'].forEach(queue => {
        utils.createRow(table[1], [
            `<a href=${region}/directory/#/admin/organization/queues/${queue.id} target="_blank">${queue.name}</a>`,
            queue.division.name,
            queue.memberCount,
            queue.mediaSettings.call.alertingTimeoutSeconds,
            (queue.mediaSettings.call.serviceLevel.percentage * 100),
            (queue.mediaSettings.call.serviceLevel.durationMs / 1000)
        ])
        });
}

//// Get queues and put them in a drop down list
async function getQueuesDropDown(){
    var pageNumber=1
    var pageSize = 2
    console.log("extracting queues");
    //// Loop through pages and write them to a table on the log page
    const element = document.getElementById('logOutput');
    const qHeader = document.createElement("p");
    Object.assign(qHeader, {id:'qHeader'});
    var queueList=[];
    do {
        var response = await getQueues(pageSize,pageNumber);
        //// append results to the dropdown box
        var queueItem={};
        response.entities.forEach( queue => {
            queueItem[queue.id]= Object.assign({},{value:queue.id,text:queue.name})
            queueList.push(queueItem[queue.id]);
        })
        pageNumber ++;
    }
    while (response.lastUri != response.selfUri);
    let leftDiv = document.createElement('div');
    leftDiv.classList.add('col-sm-6');
    element.appendChild(leftDiv)
    utils.createDropBoxSelectBox(queueList, leftDiv, 'Select Queue');
    let button = document.createElement("gux-button")
    Object.assign(button, {accent: "secondary", class:"button",
        name: "queueMembers", id:"button", textContent: "Go"});
    element.insertAdjacentElement("beforeend",button)
    //element.appendChild(button);
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
        getMembersOfQueue(document.querySelector('[aria-selected="true"]').textContent, document.querySelector('[aria-selected="true"]').value);
    })
}

//// Get a list of queue memebers and display them
export async function getMembersOfQueue(queueName, queueId, memberCount){
    var pageNumber=1
    var pageSize = 99
    console.log("exporting queue members");
    if (memberCount === 0) {
        await queueMemberDataToTable(queueName, queueId, { entities: [] });
        return;
    }
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
            page.appendChild(qh);
        } else if (!page.contains(qh)) {
            page.appendChild(qh);
        }
        
        qh.innerHTML= `<a href=${region}/directory/#/admin/organization/queues/${queueId}/members target="_blank">${queueName}</a>`,queueName;
        table = utils.createGuxTable(`queueMembers_${queueName}`)
        qh.appendChild(table[0]).appendChild(table[1]);
        utils.createHeader(table[1],['Name', 'division','department','userName', 'state','acdAutoAnswer', 'ringNumber', 'memberBy']);
    };
    (data?.entities ?? []).forEach(user => {
        utils.createRow(table[1], [
            user.name,
            user.user.division.name,
            user.user.department,
            `<a href=${region}/directory/#/admin/directory/peopleV2/${user.user.id} target="_blank">${user.user.id}</a>`,
            user.user.state,
            user.user.acdAutoAnswer,
            user.ringNumber,
            user.memberBy
        ])
        });
    //page.appendChild(table);
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