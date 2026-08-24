
import { getUsers } from "./users.js";
import { userSelectLoop } from "./passwordReset.js";
import * as utils from "./utils.js";

//get permissions one page at a time
async function getPermissions(pageSize = 99, pageNumber = 1) {
    const apiToCall = `/api/v2/authorization/permissions?pageSize=${pageSize}&pageNumber=${pageNumber}`;
    const permissionsList = await utils.getAPI(apiToCall);
    return permissionsList;
}

//// Get all permissons for the organization
async function getAllPermissions() {
    let pageNumber = 1;
    const pageSize = 99;
    let body = [];
    let response;
    do {
        response = await getPermissions(pageSize, pageNumber);
        //// create body for evental role creation
        body = await createBody(body, response);
        pageNumber ++;
    }
    while (response.lastUri != response.selfUri);
    console.log(body);
    return body;
}

function assignGeneralPermissions() {
    return [
        "location_contributor",
        "user_manager",
        "notification_administration",
        "integration_config_administration",
        "group_administration",
        "admin",
        "employee",
        "content_management_admin",
        "location_administration",
        "person_administration",
        "architect_administration",
        "content_management_user",
        "architect_read_only",
        "group_creation",
        "field_administration",
        "user_administration",
        "location_manager",
        "architect_editor",
        "notification_creation",
        "role_manager"
      ];
}

//create each entry in the body of the post request
function createBody(body, pageData) {
    pageData.entities.forEach((domainName) => {
        body.push({domain: domainName.domain, entityName: "*", actionSet: ["*"], allowConditions: false });
    });
    return body;
}

// create body for assigning roles and divisions
async function createBulkRoleApiBody(division, users) {
    const body = {};
    const userIds = [];
    Object.assign(body, {divisionIds: [division]});
    users.forEach((user) => {
        userIds.push(user.defaultValue);
    });
    Object.assign(body, {subjectIds:userIds});
    console.log(body);
    return body;
}

//// create the new master admin role
////  Build the new role using the body from above
////  POST  POST /api/v2/authorization/roles
async function postMasterAdmin(body){
    const apiToCall = "/api/v2/authorization/roles";
    const fullBody = ({
        name: "Full Master Admin",
        description: "This contains every domains ALL PERMISSIONS permission",
        permissions: assignGeneralPermissions(),
        permissionPolicies: body
    });
    const response = await utils.otherPostApi(apiToCall, fullBody);
    return response;
}

export async function createMasterAdmin(){
    console.log("Creating Master Admin Role");
    document.getElementById("example1").showModal();

    await utils.awaitModalResponse();
    console.log("we should be waiting");
    const exportBtn  = document.getElementById("exportButton");
    exportBtn.style.display = "none";
    const body = await getAllPermissions();
    const data = await postMasterAdmin(body);
    console.log("Completed Admin Post");
    console.log(data.status);
    const jsonData = await data.json();
    const element = document.getElementById("logOutput");
    const newField = document.createElement("div");
    newField.id = "jsonBox";
    if (data.message){
        element.innerHTML = element.innerHTML + `<p><h3 id="error"> ${data.message} </p>`;
    } else {
        element.innerHTML = element.innerHTML + `<p><h3 id="success"> Role Creation Successful</h3></p>`;
    }
    console.log(jsonData);
    element.appendChild(newField);
    jQuery(document).ready(function() {
        jQuery("#jsonBox").jsonViewer(jsonData, {withQuotes: true, rootCollapsable: true, collapsed:true});
    });
    
    
}


//// ***** List all Roles and User Counts ******

//// make get call to get roles
async function getRoles(pageSize=99,pageNumber=1){
    const apiToCall = `/api/v2/authorization/roles?pageSize=${pageSize}&pageNumber=${pageNumber}&sortBy=name&sortOrder=ascending&userCount=true`;
    const response = utils.getAPI(apiToCall);
    return response;
}

//// make get call to get divisions
export async function getDivisions(pageSize=99,pageNumber=1){
    const apiToCall = `/api/v2/authorization/divisions?pageSize=${pageSize}&pageNumber=${pageNumber}&objectCount=true`;
    const response = utils.getAPI(apiToCall);
    return response;
}

//// log output from role api call
async function logRoleOutput(table, data){
    const authData  = await utils.getAuthInfo();
    const region  = authData.region.replace("api","apps");
    const alphaData = await alphaSortByName(data.entities);
    alphaData.forEach(function (role){
        const addOnLicenses = [];
        const dataRow=[
            `<a href=${region}/directory/#/admin/people-permissions/roles/${role.id} target="_blank">${role.name}</a>`,
            `<a href=${region}/directory/#/admin/people-permissions/roles/${role.id}  target="_blank">${role.id}</a>`,
            role.userCount, role.default, role.baseLicense]
            //// Loop through addonLicenses
            if(role.addonLicenses){
                role.addonLicenses.forEach(grant => {
                    addOnLicenses.push(`${grant}<br>`);
                });
            }
            dataRow.push(addOnLicenses);
        utils.createRow(table, dataRow);
    });
}


export async function exportRoles(){
    let pageNumber = 1;
    const pageSize = 99;
    //// get a list of user roles
    const table = utils.createGuxTable("role_export");
    // const table = document.createElement('table');
    // Object.assign(table, {id:"role_export"});
    document.getElementById("logOutput").appendChild(table[0]).appendChild(table[1]);
    utils.createHeader(table[1], ["roleName", "roleId", "userCount", "Genesys_default", "baseLicense", "addonLicenses"]);
    utils.loadingMessage("Roles");
    let resp;
    do{
        resp = await getRoles(pageSize, pageNumber);
        console.log(resp);
        await logRoleOutput(table[1], resp);
        pageNumber ++;
    } while (resp.selfUri != resp.lastUri);
    const exportBtn  = document.getElementById("exportButton");
    exportBtn.style.display = "block";
    utils.loadingMessageClear("Roles");
}

export async function bulkAssignRoles() {
    let pageNumber = 1;
    const pageSize = 99;
    //// create the structure of the page
    createRoleBody("Available", "Assigned");
    //// get divisons
    const dropBoxOptions = [{value: "*", text: "All"}];
    let resp;
    do{
        resp = await getDivisions(pageSize, pageNumber);
        resp.entities = await alphaSortByName(resp.entities);
        resp.entities.forEach(function (division) {
            dropBoxOptions.push({value:division.id, text:division.name});
        });
        pageNumber ++;
    } while (resp.selfUri != resp.lastUri);
    //// get all roles and populate the page
    pageNumber = 1;
    do{
        resp = await getRoles(pageSize, pageNumber);
        resp.entities = await alphaSortByName(resp.entities);
        resp.entities.forEach(function (role) {
            createBulkItemSelector(role.name, role.id, dropBoxOptions);
        });
        pageNumber ++;
    } while (resp.selfUri != resp.lastUri);
    //// add listener to move items between boxes
    addListenerToSelectItems();
    
    //// Add listener for user click a button
   const selectedRoles = new Promise((resolve) => {
    document.getElementById("selectButton").addEventListener("click", () => {
        resolve(getSelectedRoles());
        });
    });
    //// wait for the user to click the button 
    const rolesAndDivs = await selectedRoles;
    
    //// collect all roles and divisions from the right side
    console.log("returned information: ", rolesAndDivs);
    
    //// Clear the page so we can select users
    const element = document.getElementById("logOutput");
    element.innerHTML = ""; /// Clear the page

    //// get users for selection
    pageNumber = 1;
    do{
        resp = await getUsers(pageSize, pageNumber);
        await userSelectLoop(resp);
        pageNumber++;
    } while (resp.selfUri != resp.lastUri);

    const btnUsers = document.getElementById("selectButton");
    //// Add listener for user click a button
    const eventPromise = new Promise((resolve) => {
        btnUsers.addEventListener("click", () => {
            if (document.querySelectorAll("input[type=\"checkbox\"]:checked")){
                    resolve(); 
                };
            });
        });
    
    ////  Event Listener for Select All Checkbox
    utils.makeSelectAllListener();
    //// Make rows clickable
    utils.makeTableRowsClickable();

    //// Wait for user
    await eventPromise;
    //// collect selected users
    const users = document.querySelectorAll('input[type="checkbox"]:checked');
    element.innerHTML = ""; /// Clear the page
    //var table = document.createElement("table");
    const table = utils.createGuxTable("bulk_user_role_assign");
    //Object.assign(table, {id:"bulk_user_role_assign"});

    //// provide export button
    const exportBtn  = document.getElementById("exportButton");
    exportBtn.style.display = "block";
    //// hide done button
    btnUsers.style.display = "none";
    element.appendChild(table[0]).appendChild(table[1]);
    utils.createHeader(table[1], ["userName", "roleName", "divisionName", "status"]);
    console.log(users);
    rolesAndDivs.forEach(  async function(entry) {
        const role = entry.roleId;
        const body = await createBulkRoleApiBody(entry.divId, users);
        const apiToCall = `/api/v2/authorization/roles/${role}`;
        const response = await utils.otherPostApi(apiToCall, body);
        if (response.ok){
            users.forEach(user => {
                utils.createRow(table[1], [ user.parentNode.parentElement.cells[1].innerText,
                        entry.roleName, entry.divName, "success"]);
            });
        }else{
            users.forEach(user => {
                utils.createRow(table[1], [ user.parentNode.parentElement.cells[1].innerText,
                        entry.roleName, entry.divName, response.message]);
            });
        };
    });
}

function createRoleBody(leftLabel, rightLabel){
    const bodyDiv = document.createElement("div");
    Object.assign(bodyDiv, {id: "bodyDiv", className: "bodyDiv"});
    bodyDiv.appendChild(Object.assign(document.createElement("div"), {id: "boxLables", innerText: leftLabel}));
    bodyDiv.appendChild(Object.assign(document.createElement("div"), {id: "boxLables", innerText: rightLabel}));
    bodyDiv.appendChild(Object.assign(document.createElement("div"), {id: "selectBox"}));
    bodyDiv.appendChild(Object.assign(document.createElement("div"), {id: "displayBox"}));
    document.getElementById("logOutput").appendChild(bodyDiv);
    const footerDiv = document.getElementsByClassName("FooterContainer");
    footerDiv[0].appendChild(Object.assign(document.createElement("gux-button"), {accent: "primary", id: "selectButton", innerText: "Done"}));
}

//// Create the items to move between the selection boxes
function createBulkItemSelector(itemName, itemText, dropBoxOptions){
    const itemSelector = document.createElement("div");
    Object.assign(itemSelector, {id: "itemSelector", title: itemText });
    itemSelector.appendChild(Object.assign(document.createElement("div"),{id: "selectText", innerText: itemName, title: itemText}));
    let newDiv = Object.assign(document.createElement("div"),{id: "selectSecond", className: "smallbox"});
    newDiv = createDivisionSelectBox(dropBoxOptions, newDiv);
    itemSelector.appendChild(newDiv);
    const selectBox = document.getElementById("selectBox");
    selectBox.appendChild(itemSelector);
}

function createDivisionSelectBox(dropBoxOptions, container) {
    const dropDown = document.createElement("gux-dropdown");
    Object.assign(dropDown, {"filter-type":"starts-with", placeholder:"Select a Division"});
    const dropBox = document.createElement("gux-listbox");
    dropBoxOptions.forEach(i => {
        const dbOption = document.createElement("gux-option");
            dbOption.value = i.value;
            dbOption.innerText = i.text;
           dropBox.appendChild(dbOption);
    });
    container.appendChild(dropDown).appendChild(dropBox);
    return container;
}

async function addListenerToSelectItems(){
    const rightSideBox = document.getElementById("displayBox");
    const leftSideBox = document.getElementById("selectBox");
    const selectItems = document.querySelectorAll("#selectText");
    selectItems.forEach(item => {
        item.addEventListener("click", (event) => {
            if (event.target.parentNode.parentNode.id === "selectBox"){
                //console.log(event)
                rightSideBox.appendChild(event.target.parentNode);
            } else {
                leftSideBox.appendChild(event.target.parentNode);
            }
        });
    }); 
}

//// returns selected role in and array of objects
//// divName, divId, roleName, roleId
function getSelectedRoles(){
    const selectedRoles = [];
    const updateItems = document.querySelectorAll("#displayBox>#itemSelector");
    updateItems.forEach( item => {
        //console.log(item.childNodes[1].childNodes[0].selectedOptions[0].innerText," : ",
        //    item.childNodes[1].childNodes[0].selectedOptions[0].value)
        const selectedOption = item.childNodes[1].firstChild.firstChild.querySelector('[aria-selected="true"]');
        selectedRoles.push({roleName:item.firstChild.textContent,
            roleId:item.firstChild.title,
            divName: selectedOption.textContent,
            divId: selectedOption.value
        });
    });
    return selectedRoles;
}

async function alphaSortByName(resp){
    resp.sort((a,b) => { 
        if (a.name.toUpperCase() < b.name.toUpperCase()){
            return -1;
        }else if(a.name.toUpperCase() > b.name.toUpperCase()){
            return 1;
        }else{
            return 0;
        }
    })
    return resp;
}
