
import { getUsers } from "./users.js";
import * as utils from './utils.js';

//get phones
async function getPhones(pageSize=99, pageNumber=1) {
    const apiToCall = `/api/v2/telephony/providers/edges/phones?name=*webrtc&expand=site&pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=name&sortOrder=asc`;
    const phoneList = await utils.getAPI(apiToCall);
    return phoneList;
}


// Get some users
async function collectUsers() {
    const users = await getUsers();
    return users;
}


// display a list of phones with radio buttons for default template
async function selectPhoneLoop(phones) {
    const element = document.getElementById("logOutput");

    var table = document.querySelector('table');
    if (table === null ) {
        element.innerHTML += "<p><h3>Select Template Phone</h3></p>";
        const exportBtn  = document.getElementById("exportButton")
        exportBtn.style.display = 'none';
        table = document.createElement("table");
        //// Create header with empty column for radio buttons
        utils.createHeader(table, ["","Name","id","phoneSite"])

        const newRow = table.insertRow();
        const defaultRow = document.createElement("INPUT");
        defaultRow.type="radio";
        defaultRow.name="radio";
        defaultRow.id="phoneSelect";
        defaultRow.class="radio";
        defaultRow.value='default';
        const defaultInput = document.createElement("INPUT");
        defaultInput.setAttribute("type", "text")
        defaultInput.setAttribute("maxlength", 36)
        defaultInput.setAttribute("size", 36)
        defaultInput.name="customChoice";
        defaultInput.id="customChoice";
        defaultInput.class="customChoice"
        const cell0 = newRow.insertCell();
        const cell1 = newRow.insertCell();
        const cell2 = newRow.insertCell();
        const cell3 = newRow.insertCell();
        cell0.appendChild(defaultRow);
        cell1.textContent = "Custom GUID";
        cell2.appendChild(defaultInput);
        //cell3.textContent = "";
        table.appendChild(newRow);
        element.appendChild(table);
    };
    phones['entities'].forEach(phone => {
        const newRow = table.insertRow();
        const checkbox = document.createElement("INPUT");
        checkbox.type="radio";
        checkbox.name="radio";
        checkbox.id="phoneSelect";
        checkbox.class="radio";
        checkbox.value=phone.id;
        const cell0 = newRow.insertCell();
        const cell1 = newRow.insertCell();
        const cell2 = newRow.insertCell();
        const cell3 = newRow.insertCell();
        cell0.appendChild(checkbox);
        cell1.textContent = phone.name;
        cell2.textContent = phone.id;
        cell3.textContent = phone.site.name;
        table.appendChild(newRow);
        });
    //element.appendChild(table);
}

// disply a list of users with checkboxes
async function usersLoop(users) {
    const element = document.getElementById("logOutput");
    var table = document.querySelector('table');
    if (table === null ) {
        element.innerHTML += "<p><h3>Select user to create phones for</h3></p>";
        const exportBtn  = document.getElementById("exportButton")
        exportBtn.style.display = 'none';
        table = document.createElement("table");
        const headerColumns = ['name','id', 'associatedStation'];
        utils.createHeaderWCheckbox(table, headerColumns);
        element.appendChild(table);
    };
    users['entities'].forEach(user => {
            let rowData = [user.name, user.id];
            if ('station' in user && 'associatedStation' in user.station) {
                rowData.push("True");
            }else{
                //newRow.style.backgroundColor ="yellow";
                rowData.push("True");
            };
            utils.createRowWCheckbox(table, rowData, user.id, user.name);
            });
    //element.appendChild(table);
}

//// display log output for phone built
async function phoneLogOutput(userName, buildStatus, phoneId, status) {
    const element = document.getElementById("logOutput");
    const exportBtn  = document.getElementById("exportButton")
    exportBtn.style.display = 'block';
    var table = document.querySelector('table');
    if (table === null ) {
        element.innerHTML += "<p><h3>Phone Build Log</h3></p>";
        table = document.createElement("table");
        Object.assign(table, {id:"phoneBuild_export"});
        utils.createHeader(table,["Name","status","phoneId","Success/Fail"])
        element.appendChild(table);
    };
    const tableColumns =[userName, buildStatus, phoneId, status];
    const tableRow = table.insertRow();
    if (buildStatus != 200) {
        tableRow.style.backgroundColor ="yellow"
    };
    tableColumns.forEach(column => {
        const td = document.createElement("td");
        td.textContent = column;
        tableRow.appendChild(td);
        })
        table.appendChild(tableRow);
}

//// display all phones built in the system
async function phoneLoop(phones) {
    const element = document.getElementById("logOutput");

    var table = document.querySelector('table');
    if (table === null ) {
        element.innerHTML += "<p><h3>System Phones</h3></p>";
        table = document.createElement("table");
        Object.assign(table, {id:"phone_export"});
        utils.createHeader(table,["Name","id","phoneSite"])
        element.appendChild(table);
    };
    phones['entities'].forEach(phone => {
        const newRow = table.insertRow();
        const cell1 = newRow.insertCell();
        const cell2 = newRow.insertCell();
        const cell3 = newRow.insertCell();
        cell1.textContent = phone.name;
        cell2.textContent = phone.id;
        cell3.textContent = phone.site.name;
        table.appendChild(newRow);
        });
}

 ////  Need to get a list of users to create phones for
 async function getUsersList() {
    var pageNumber=1
    var pageSize = 99
    do {
        var response = await getUsers(pageSize,pageNumber);
        console.log(response);
        await usersLoop(response); 
        pageNumber ++;
    }
    while (response.lastUri != response.selfUri);
    
       //// add button to complete selection of users needing phones
       const element = document.getElementById("logOutput");
       element.innerHTML += '<p><button id=users type="button"> Select Users Needing Phones </button></p>';
       element.appendChild
       const btnUsers = document.getElementById('users');
       //// wait for user to make a selection
       const eventPromise = new Promise((resolve) => {
             btnUsers.addEventListener('click', () => {
               if (document.querySelector('input[type="checkbox"]:checked')){
                    resolve(); 
               };
           });
        });

    ////  Event Listener for Select All Checkbox
    utils.makeSelectAllListener();

    //// make all table rows clickable setting the checkbox
    utils.makeTableRowsClickable();

        await eventPromise;
        const usersNeedingPhones = document.querySelectorAll('input[type="checkbox"]:checked')
        return usersNeedingPhones;
 }

 //// Create New phone
 async function createPhone(body){
    let apiToCall = "/api/v2/telephony/providers/edges/phones"
    const response = await utils.otherPostApi(apiToCall, body);
    return response;
 }

// get a list of phones to use as a template
export async function bulkBuildPhones() {
    var pageNumber=1
    var pageSize = 99
    console.log("exporting phones");
    
    do {
        var response = await getPhones(pageSize,pageNumber);
        await selectPhoneLoop(response); 
        pageNumber ++;
    }
    while (response.lastUri != response.selfUri);


    //// add button to complete selection of template phone
    const element = document.getElementById("logOutput");
    element.innerHTML += '<p><button id=tempPhone type="button">Set Template Phone </button></p>';
    element.appendChild
    const tempPhone = document.getElementById('tempPhone');
    
    //// wait for user to make a selection
    const eventPromise = new Promise((resolve) => {
          tempPhone.addEventListener('click', () => {
            if (document.querySelector('input[type="radio"]:checked')){
                if (document.querySelector('input[type="radio"]:checked').value !='default'){
                    console.log('this is default')
                    resolve();
                } else if (!document.querySelector('input[type="text"]').value){
                    alert("You need to add a value to the ID box to use the Custom Option!"); 
                } else {
                    resolve(); 
                }
                } else {
                    alert("You have to pick someting!");
                }
            });
        });
    //// Make the table rows clickable 
        utils.makeTableRowsClickable();
        
        await eventPromise;

        let radioButton = document.querySelector('input[type="radio"]:checked').value;
        if (radioButton === 'default'){
            radioButton =  document.querySelector('input[type="text"]').value
            };
        console.log(`template id is: ${radioButton}`);
    element.innerHTML='';

    const usersNeedingPhones =await getUsersList();


    
    console.log(`this is our phone template: ${radioButton}`)
    //// Collect the table so we can reuse the data
    const table = document.querySelector('table');
    //// Collect our template phone so we can overwrite it for the new users
    const templatePhone = await utils.getAPI(`/api/v2/telephony/providers/edges/phones/${radioButton}`);
    console.log("these are our users");
    let objPhone={};
    let objUser={};
    element.innerHTML = ''; /// Clear the page
    usersNeedingPhones.forEach( async user => {
        objPhone[user.value] = Object.assign({}, templatePhone)

         //// REPLACE USER NAME WITH UNDERSCORES and APPEND _WEBRTC
        let userInfo = table.rows[user.name].cells[1].textContent;
        let userId = table.rows[user.name].cells[2].textContent;
        const phoneName = userInfo.replaceAll(" ","_") + "_webRTC";
        const phoneId = userId.replaceAll("","");
        //console.log(userValue);
        objPhone[user.value].name = phoneName;
        Object.assign(objPhone[user.value], {webRtcUser:{id:phoneId}});
        const newPhone = await createPhone(objPhone[user.value]);
        const jsonNewPhone = await newPhone.json();

        if (newPhone.ok){
            console.log(jsonNewPhone);
            await phoneLogOutput(userInfo, newPhone.status, jsonNewPhone.id, 'success');
        }else{
            //let jsonPwdReset = await pwdReset.json();
            console.log(newPhone.status);
            console.log(jsonNewPhone.message);
            await phoneLogOutput(userInfo, newPhone.status, jsonNewPhone.message, 'failed');
        };

        })
  
}

export async function exportPhones() {
    var pageNumber=1
    var pageSize = 99
    console.log("exporting phones");
    utils.loadingMessage("Phones")
    do {
        var response = await getPhones(pageSize,pageNumber);
        await phoneLoop(response); 
        pageNumber ++;
    }
    while (response.lastUri != response.selfUri);
    utils.loadingMessageClear("Phones")
    const exportBtn  = document.getElementById("exportButton")
    exportBtn.style.display = 'block';
}