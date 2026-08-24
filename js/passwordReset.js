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
        table = document.createElement("table");
        Object.assign(table, {id:"passwordReset"});
        utils.createHeader( table, ["User", "UserName","Status", "Code"])
    };
        const newRow = table.insertRow();
        const cell1 = newRow.insertCell();
        const cell2 = newRow.insertCell();
        const cell3 = newRow.insertCell();
        const cell4 = newRow.insertCell();
        if (status != 204) {
            newRow.style.backgroundColor ="yellow"
        };
        cell1.innerHTML = user.name;
        cell2.innerHTML = user.username;
        cell3.textContent = status;
        cell4.textContent = code;

        table.appendChild(newRow);
        ;
    element.appendChild(table);
}


//// Output a list of users
async function userLoop(table, users, idField) {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    const urlParams = new URL(tabs[0].url).searchParams
    switch(urlParams.get('func')) {
        case 'bulkAssignAutoAnswer':
            var columnHeaders = ['User', 'UserName','User GUID','State','AutoAnswer']
            break;
        case 'userList':
            var columnHeaders = ['User', 'UserName','User GUID', 'Division','State','AutoAnswer', 'skills:proficiency']
            break;
        default:
            var columnHeaders = ['User', 'UserName','User GUID', 'Division','State','AutoAnswer', 'skills:proficiency']
            break;
        }
    const element = document.getElementById("logOutput");
    var table_page = document.querySelector('table');
    if (table_page === null ) {
        utils.createHeader(table, columnHeaders);
    };

    users['entities'].forEach(user => {
        //console.log(user)
        if (user.hasOwnProperty('skills')){
            //console.log('has skills')
            let userSkills='';
            user.skills.forEach(skill =>{userSkills +=`${skill.name}:${skill.proficiency}<br>`});
            var rowColumns = [
                user.name, user.username, user.id, user.division.name,
                user.state, user.acdAutoAnswer, userSkills
            ]
        } else{
            var rowColumns = [
                user.name, user.username,
                user.id, user.state, user.acdAutoAnswer
            ]
        }

        utils.createRow(table, rowColumns )
        });
    element.appendChild(table);
}

//// display a list of users with checkboxes
export async function userSelectLoop(users) {
    const element = document.getElementById("logOutput");
    const exportBtn  = document.getElementById("exportButton")
    exportBtn.style.display = 'none';
    var table = document.querySelector('table');
    if (table === null ) {
        table = document.createElement("table");
        const headerRow = table.insertRow(0);
        const defaultRow = document.createElement("INPUT");
         Object.assign(defaultRow, {
            type: "checkbox", name:"userSelect",
            id:"selectAll", class:"checkbox"
         })
        const defaultRowLabel = document.createElement('label');
        Object.assign(  defaultRowLabel, {
            htmlFor:'selectAll', textContent:"SelectAll"
        })
        const th = document.createElement("th");
        th.appendChild(defaultRow);
        th.appendChild(defaultRowLabel);
        headerRow.appendChild(th);
        const headers = ["User", "UserName","User GUID","State", "AutoAnswer"];
        headers.forEach( header => {
            const th = document.createElement("th");
            th.textContent = header;
            headerRow.appendChild(th);
        })
        element.appendChild(table);
    };
    users['entities'].forEach(user => {
        utils.createRowWCheckbox(table, [user.name, user.username, user.id, user.state, user.acdAutoAnswer], user.id);
        });

    element.appendChild(table);

};

export async function runPwdReset(newPwd) {
    console.log("new pwd:", newPwd);
        var pageNumber=1
        var pageSize = 99
        const body = {newPassword:newPwd};
        const element = document.getElementById("logOutput");
        element.innerHTML += "<p><h3>Select users for password reset for</h3></p>";
        do {
            var response = await getUsers(pageSize,pageNumber);
            await userSelectLoop(response); 
            pageNumber ++;
        }
        while (response.lastUri != response.selfUri);
        
        //// add button to complete selection of users needing phones
       element.innerHTML += '<p><button id=users type="button"> Select Users Password Reset </button></p>';
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
                console.log(`resetting userId: ${user.value}`);
                var apiToCall = `/api/v2/users/${user.value}/password`
                var pwdReset = await utils.otherPostApi(apiToCall, body);
                const userInfo = {};
                userInfo.name = table.rows[user.name].cells[1].textContent;
                userInfo.username = table.rows[user.name].cells[2].textContent;
                console.log(pwdReset);


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
        const table = document.createElement("table");
        Object.assign(table, {id:"user_export"});
        utils.loadingMessage('Users');
        do {
            var response = await getUsers(pageSize,pageNumber);
            await userLoop(table, response); 
            pageNumber ++;
        }
        while (response.lastUri != response.selfUri);
        utils.loadingMessageClear('Users');
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
        var response = await getUsers(pageSize,pageNumber);
        await userSelectLoop(response); 
        pageNumber ++;
    }
    while (response.lastUri != response.selfUri);
    
    //// add button to complete selection of users needing phones
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

     ////  Event Listener for Select All Checkbox
    utils.makeSelectAllListener();

    utils.makeTableRowsClickable();
   


    //// Wait for user
    await eventPromise;
    //// collect selected users
    const choice = document.getElementById('userChoice');
    var users = document.querySelectorAll('input[type="checkbox"]:checked');
    element.innerHTML = ''; /// Clear the page
    var table = document.createElement("table");
    Object.assign(table, {id:"user_export"});
    //// pass in the users and set autoAnswer to true
    var bodyArray=[];
    var userUpDate={};
    var apiToCall = '/api/v2/users/bulk';
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
            const resp = await patchAPI(apiToCall, bodyArray);
            const jsonResp = await resp.json();
            //// Output Results
            await userLoop(table, jsonResp);
    }
    const exportBtn  = document.getElementById("exportButton")
    exportBtn.style.display = 'block';
}


