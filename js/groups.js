import * as utils from './utils.js';

export async function getGroups(pageSize=99,pageNumber=1){
    const apiToCall = `/api/v2/groups?pageSize=${pageSize}&pageNumber=${pageNumber}&sortOrder=ascending`;
    const resp = utils.getAPI(apiToCall);
    return resp;
}


export async function exportGroups() {
    let pageNumber=1;
    let pageSize=99;
    //// get Groups and put them on a page
    console.log("extracting groups");
    //// Loop through pages and write them to a table on the log page
    const element = document.getElementById('logOutput');
    const table = utils.createGuxTable("group_export");
    const authData  = await utils.getAuthInfo();
    const region  = authData.region.replace('api','apps');
    element.appendChild(table[0]).appendChild(table[1]);
    const exportBtn  = document.getElementById("exportButton")
    exportBtn.style.display = 'block';
    utils.createHeader(table[1], ["groupName","id","memberCount","type","visibility","callsEnabled","rolesEnabled"])
    do {
        var response = await getGroups(pageSize,pageNumber);
        console.log(response);
        //// append results to the dropdown box
        response.entities.forEach( group => {
            utils.createRow(table[1],[
                `<a href=${region}/directory/#/admin/groups/general/${group.id} target="_blank">${group.name}</a>`,
                `<a href=${region}/directory/#/admin/groups/general/${group.id} target="_blank">${group.id}</a>`,
                group.memberCount,
                group.type,group.visibility,group.callsEnabled,group.rolesEnabled]);
        })
        pageNumber ++;
    }
    while (response.lastUri != response.selfUri);
    
}

export async function exportGroupUsers(){
    await getGroupsDropDown()
}

//// Get queues and put them in a drop down list
async function getGroupsDropDown(){
    var pageNumber=1
    var pageSize = 99
    console.log("extracting groups");
    //// Loop through pages and write them to a table on the log page
    const element = document.getElementById('logOutput');
    const qHeader = document.createElement("p");
    Object.assign(qHeader, {id:'qHeader'});
    let dropDownBox = document.createElement('select');
    do {
        var response = await getGroups (pageSize,pageNumber);
        //// append results to the dropdown box
        response.entities.forEach( group => {
            const option = document.createElement("option");
            option.value = group.id;
            option.text = group.name;
            dropDownBox.appendChild(option);
        })
        pageNumber ++;
    }
    while (response.lastUri != response.selfUri);
    element.appendChild(dropDownBox);
    let button = document.createElement("button")
    Object.assign(button, {class:"button",
    name: "groupMembers", id:"button", textContent: "Go"})
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
        getMembersOfGroups(dropDownBox[dropDownBox.selectedIndex].text, dropDownBox.value);
    })
}

export async function getMembersOfGroups(groupName, groupId) {
    var pageNumber=1
    var pageSize = 99
    console.log("exporting group members");
    //// Loop through pages and write them to a table on the log page
    do {
        const apiToCall = `/api/v2/groups/${groupId}/individuals?pageNumber=${pageNumber}&pageSize=${pageSize}`
        var response = await utils.getAPI(apiToCall);
        await groupMemberDataToTable(groupName, response); 
        pageNumber ++;
    }
    while (response.nextUri);
    return
}

async function groupMemberDataToTable(groupName, data){
    const page = document.getElementById("logOutput");
    var table = document.querySelector('table');
    if (table === null ) {
        let qh = document.getElementById('qHeader');
        if (qh === null){
            qh = document.createElement("p");
            Object.assign(qh, {id:'qHeader'});
            page.appendChild(qh);
        } else if (!page.contains(qh)) {
            page.appendChild(qh);
        }
        qh.innerText= groupName;
        table = utils.createGuxTable(`groupMembers_${groupName}`);
        qh.appendChild(table[0]).appendChild(table[1]);
        utils.createHeader(table[1],['id','selfUri']);
    };
    (data?.entities ?? []).forEach(user => {
        utils.createRow(table[1], [
            user.id,
            user.selfUri
        ])
        });

    return
}
