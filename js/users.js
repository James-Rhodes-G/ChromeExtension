
import { userSelectLoop } from "./passwordReset.js";
import * as utils from "./utils.js";
//// Get a list of users expanded station and skills
export async function getUsers(pageSize=99, pageNumber=1) {
    const apiToCall = `/api/v2/users?pageSize=${pageSize}&pageNumber=${pageNumber}&expand=station,skills&sortOrder=ascending`;
    const response = await utils.getAPI(apiToCall);
    return (response);
}

//// Logoff user API Call
export async function logoffUsers(userId){
    const apiToCall = `/api/v2/apps/users/${userId}/logout`
    //// This Needs to be a DELETE API CAll
    const response = await utils.deleteAPI(apiToCall);
    ////const response = await getAPI(apiToCall);
    return response;
}

//// USER LOGOFF SHOULD RUN FROM EITHER INJECTED BUTTON
//// OR FROM USER SELECT PAGE.
export async function bulkUserLogoff(userIds){
        const table = document.createElement('table');
        Object.assign(table, {id:"userLogoff"});
        const header = utils.createHeader(table,["userID", "status"]);
        const element = document.getElementById('logOutput').appendChild(table);;
        userIds.forEach( async function(user) {
            console.log(user);
            let resp = await logoffUsers(user);
            if(resp.ok){
                utils.createRow(table, [user, resp.status]);
            }else{
                utils.createRow(table,[user, resp.status]);
            };
        });
            //// show export button
            document.getElementById('exportButton').style.display="block";
}

//// Get List of Roles for Users
async function getUsersRoles(userId) {
    utils.loadingMessage(userId);
    const apiToCall = `/api/v2/authorization/subjects/${userId}`;
    const response = await utils.getAPI(apiToCall);
    utils.loadingMessageClear(userId);
    return response;
    
}

//// Getting All USERS roles
export async function exportUserRoles() {
    //// Setup log output page
    let element = document.getElementById('logOutput');
    element.innerText += "User Role Export";
    let table = document.createElement('table');
    //// Create Table Header
    let tableHeader = ['name', 'userName', 'id', 'role:division'];
    utils.createHeader(table, tableHeader);
    element.appendChild(table)
    ////  Get All Users (need ID's and UserNames for export)
    var pageNumber=1;
    var pageSize = 99;
    const authData  = await utils.getAuthInfo();
    const region  = authData.region.replace('api','apps')
    do {
        var response = await getUsers(pageSize,pageNumber);
        response.entities.forEach( async function (user) {
            let userRolesResp = await getUsersRoles(user.id);
            let dataRow = [user.name, 
                `<a href=${region}/directory/#/admin/directory/peopleV2/${user.id} target="_blank">${user.name}</a>`,
                `<a href=${region}/directory/#/admin/directory/peopleV2/${user.id} target="_blank">${user.id}</a>`];
            //// Loop through role return assembling role:division
            let userRoles = [];
            userRolesResp.grants.forEach(grant => {
                if (grant.division.name){ 
                userRoles.push(`${grant.role.name}:${grant.division.name}<br>`);
                } else {
                    userRoles.push(`${grant.role.name}:All<br>`)
                }
            })
            dataRow.push(userRoles)
            utils.createRow(table, dataRow);
        })
        //// Loop through Users getting their roles from getUserRoles 
        pageNumber ++;
    }
    while (response.lastUri != response.selfUri);
    //// provide export button
    const exportBtn  = document.getElementById("exportButton");
    exportBtn.style.display = 'block';
}

export async function bulkSelectUserLogoff(){
    ////  Display List of users to select
        var pageNumber=1
        var pageSize = 99
        const element = document.getElementById("logOutput");
        element.innerHTML += "<p></p>";
        element.innerText += "Select users for logoff";

        do {
            var response = await getUsers(pageSize,pageNumber);
            await userSelectLoop(response); 
            pageNumber ++;
        }
        while (response.lastUri != response.selfUri);
        
        //// add button to complete selection of users needing logged off
       element.innerHTML += '<p><button id=users type="button"> Select Users </button></p>';
       element.appendChild
       const btnUsers = document.getElementById('users');
    
       //// Add listener for user click a button
       const eventPromise = new Promise((resolve) => {
            btnUsers.addEventListener('click', () => {
                if (document.querySelectorAll('input[type="checkbox"]:checked')){
                       resolve(); 
                    };
                });
            });
    
        ////  Event Listeners
    utils.makeSelectAllListener();
    utils.makeTableRowsClickable();
    //// Wait for user
    await eventPromise;

        //// collect selected users
    var users = document.querySelectorAll('input[type="checkbox"]:checked');
    element.innerHTML = ''; /// Clear the page
    //// start logging users off
    //// maping users check boxes default value
    await bulkUserLogoff([...users].map(user => user.defaultValue));    
}

export async function userLogoff() {
    const storedData = await chrome.storage.local.get('userData');
    const userIds = JSON.parse(storedData.userData);
    await chrome.storage.local.remove('userData');

    await bulkUserLogoff(userIds);
}

export async function getUsersLogoff(){
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    const response = await chrome.tabs.sendMessage(tab.id, {action:"logoffUserIds"});
    console.log(response)
}