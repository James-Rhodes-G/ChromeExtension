//bulk password reset
// sets all passwords to the same password
// 

import { getUsers } from "./users.js";
import * as utils from './utils.js';



//  log the passwords being reset
async function pwdLoop(user, status, code) {
    const element = document.getElementById("logOutput");
    var table = document.querySelector('table');
    if (table === null ) {
        var tableCreate = utils.createGuxTable("passwordReset");
        utils.createHeader( tableCreate[1], ["User", "UserName","Status", "Code"])
        element.appendChild(tableCreate[0]).appendChild(tableCreate[1]);
        table = tableCreate[1]
    };
        let rowData = [
            user.name, user.username, status,code
        ]
        utils.createRow(table,rowData)
}


//// Output a list of users
async function userLoop(table, users, idField) {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    const urlParams = new URL(tabs[0].url).searchParams
    const authData  = await utils.getAuthInfo();
    const region  = authData.region.replace('api','apps')
    switch(urlParams.get('func')) {
        case 'bulkAssignAutoAnswer':
            var columnHeaders = ['User', 'UserName','contactInfo','User GUID','Division','State','AutoAnswer','skills']
            break;
        case 'userList':
            var columnHeaders = ['User', 'UserName', 'contactInfo','User GUID', 'Division','State','AutoAnswer', 'skills:proficiency']
            break;
        default:
            var columnHeaders = ['User', 'UserName', 'User GUID', 'Division','State','AutoAnswer', 'skills:proficiency']
            break;
        }
    // const element = document.getElementById("logOutput");
    document.querySelector('#rightGutter').innerHTML=''
    var table_page = document.querySelector('table');
    if (table_page === null ) {
        utils.createHeader(table[1], columnHeaders);
    };

    users['entities'].forEach(user => {
        let userSkills='';
        let contactInfo='';
        if (user.hasOwnProperty('skills')){
            user.skills.forEach(skill =>{userSkills +=`${skill.name}:${skill.proficiency}<br>`});
        };            
        if (user.hasOwnProperty('primaryContactInfo')){
            user.primaryContactInfo.forEach(contact =>{
                if (contact.hasOwnProperty('address')){
                    contactInfo +=`${contact.mediaType}:${contact.address}<br>`;
                } else {
                    contactInfo +=`${contact.mediaType}:${contact.display}<br>`;
                }
            })
            }
        var rowColumns = [
            user.name, 
            `<a href=${region}/directory/#/admin/directory/peopleV2/${user.id} target="_blank">${user.username}</a>`,
            contactInfo,
            `<a href=${region}/directory/#/admin/directory/peopleV2/${user.id} target="_blank">${user.id}</a>`,
            user.division.name,
            user.state, user.acdAutoAnswer.toString(), userSkills
            ]
        utils.createRow(table[1], rowColumns )
        });
    table[0].appendChild(table[1]);
}

//// display a list of users with checkboxes
export async function userSelectLoop(users) {
    const element = document.getElementById("logOutput");
    const exportBtn  = document.getElementById("exportButton")
    exportBtn.style.display = 'none';
    var table = document.querySelector('table');
    if (table === null ) {
        table = utils.createGuxTableWithSelect('passwordReset');
        const headers = ["User", "UserName","User GUID","State", "AutoAnswer"];
        utils.createHeaderWCheckbox(table[1],headers);
        element.appendChild(table[0]).appendChild(table[1]);
    };
    users['entities'].forEach(user => {
        utils.createRowWCheckbox(table[1], [user.name, user.username, user.id, user.state, user.acdAutoAnswer], user.id, user.name);
        });
};

export async function runPwdReset(newPwd) {
    console.log("new pwd:", newPwd);
        var pageNumber=1
        var pageSize = 100
        const body = {newPassword:newPwd};
        const element = document.getElementById("logOutput");
        element.innerHTML += "<p><h3>Select users for password reset for</h3></p>";
        do {
            utils.loadingMessage(pageNumber, `loading page number ${pageNumber}`);
            var response = await getUsers(pageSize,pageNumber);
            await userSelectLoop(response);
            utils.loadingMessageClear(pageNumber); 
            pageNumber ++;
        }
        while (response.lastUri != response.selfUri);
        
        //// add button to complete selection of users needing phones
       element.innerHTML += '<p><gux-button accent="primary" id=users type="button" id=users type="button"> Select Users Password Reset </button></p>';
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

         ////  Event Listener for Select All Checkbox
        utils.makeSelectAllListener();

        //// make all table rows clickable setting the checkbox
        utils.makeTableRowsClickable();
 
        //// Wait for user
        await eventPromise;
        //// collect selected users
        const usersNeedingReset = document.querySelectorAll('input[type="checkbox"]:checked');
        const table = document.querySelector('table');
        Object.assign(table, {id:"password_reset"});
        element.innerHTML = ''; /// Clear the page
        //// Reset the passwords for the selected users
        const exportBtn  = document.getElementById("exportButton")
        exportBtn.style.display = 'block';
            usersNeedingReset.forEach( async user =>  {
                utils.loadingMessage(user.value, `Resetting password for: ${user.value}`)
                console.log(`resetting userId: ${user.value}`);
                var apiToCall = `/api/v2/users/${user.value}/password`
                var pwdReset = await utils.otherPostApi(apiToCall, body);
                const userInfo = {};
                userInfo.name = table.rows[user.name].cells[1].textContent;
                userInfo.username = table.rows[user.name].cells[2].textContent;
                console.log(pwdReset);
                utils.loadingMessageClear(user.value);

                if (pwdReset.ok){
                    await pwdLoop(userInfo, pwdReset.status, 'success');
                }else{
                    let jsonPwdReset = await pwdReset.json();
                    console.log(pwdReset.status);
                    console.log(jsonPwdReset.message);
                    await pwdLoop(userInfo, pwdReset.status, jsonPwdReset.message);
                }
            });
    };
    
export async function exportUsers() {
        var pageNumber=1
        var pageSize = 99
        console.log("exporting users");
        const table = utils.createGuxTable("user_export");
        const element = document.getElementById("logOutput")
        utils.loadingMessage('Users');
        do {
            var response = await getUsers(pageSize,pageNumber);
            await userLoop(table, response); 
            pageNumber ++;
        }
        while (response.lastUri != response.selfUri);
        utils.loadingMessageClear('Users');
        element.appendChild(table[0])
        const exportBtn  = document.getElementById("exportButton")
        exportBtn.style.display = 'block';
    };

export async function bulkAssignAutoAnswer(){
    var pageNumber=1
    var pageSize = 99
    const element = document.getElementById("logOutput");
    element.innerHTML += "<p></p>";
    element.innerText += "Select users for Auto Answer";
    let dropDownBox = document.createElement('select');
    Object.assign(dropDownBox, {id:'userChoice'});
    const option1 = document.createElement("option");
    option1.value = true;
    option1.text = "True";
    dropDownBox.appendChild(option1);
    const option2 = document.createElement("option");
    option2.value = false;
    option2.text = "False";
    dropDownBox.appendChild(option2);
    element.appendChild(dropDownBox);
    do {
        utils.loadingMessage(pageNumber, `loading page number ${pageNumber}`);
        var response = await getUsers(pageSize,pageNumber);
        await userSelectLoop(response);
        utils.loadingMessageClear(pageNumber); 
        pageNumber ++;
    }
    while (response.lastUri != response.selfUri);
    
    //// add button to complete selection of users needing phones
   element.innerHTML += '<p><gux-button accent="primary" id=users type="button"> Select Users </button></p>';
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

     ////  Event Listener for Select All Checkbox
    utils.makeSelectAllListener();

    utils.makeTableRowsClickable();
   


    //// Wait for user
    await eventPromise;
    //// collect selected users
    const choice = document.getElementById('userChoice');
    //// var users = document.querySelectorAll('input[type="checkbox"]:checked');
    var users = document.querySelectorAll('input[type="checkbox"]:checked:not([id^="selectAll"])')
    element.innerHTML = ''; /// Clear the page
    var table = utils.createGuxTable("user_export");
    element.appendChild(table[0]).appendChild(table[1]);
    // var table = document.createElement("table");
    // Object.assign(table, {id:"user_export"});
    //// pass in the users and set autoAnswer to true
    var bodyArray=[];
    var userUpDate={};
    var apiToCall = '/api/v2/users/bulk';
    utils.loadingMessage('autoAnswer', 'Setting Auto Answer');
    users.forEach(async function(user){
        userUpDate[user.value]={id:user.value, acdAutoAnswer:choice.value};
        bodyArray.push(userUpDate[user.value]);
        if (bodyArray.length === 50){
            //// make PATCH CALL
            const resp = await patchAPI(apiToCall, bodyArray);
            const jsonResp = await resp.json();
            //// Output Results
            await userLoop(table, jsonResp);
            //// reset bodyArray
            console.log('resetting array, and continuing');
            bodyArray=[];
        }
    })
    if (bodyArray.length>0){
            console.log('making final API call')
            //// make PATCH CALL
            const resp = await utils.patchAPI(apiToCall, bodyArray);
            const jsonResp = await resp.json();
            //// Output Results
            await userLoop(table, jsonResp);
    }
    utils.loadingMessageClear('autoAnswer');
    const exportBtn  = document.getElementById("exportButton")
    exportBtn.style.display = 'block';
}


