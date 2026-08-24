
import { getUsers } from "./users.js";
import * as utils from './utils.js';

//get phones
async function getPhones(pageSize=10000, pageNumber=1) {
    const apiToCall = `/api/v2/telephony/providers/edges/phones?expand=site,phoneBaseSettings&pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=name&sortOrder=asc`;
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
        //// Create header with empty column for radio buttons
        table = utils.createGuxTable("bulkPhoneSelect");
        utils.createHeader(table[1], ["","Name","id","phoneSite"]);
        const defaultInput = document.createElement("INPUT");
        Object.assign(defaultInput,{type:"text", maxlength:36,
            size:36, name:"customChoice", id:"customChoice"
            })
        utils.createRowWRadio(table[1],["Custom GUID", defaultInput,""],"customChoice")
        element.appendChild(table[0]).appendChild(table[1]);
    };
    phones['entities'].forEach(phone => {
        utils.createRowWRadio(table[1],[phone.name, phone.id, phone.site.name],phone.id)
        });
}

// disply a list of users with checkboxes
async function usersLoop(users) {
    const element = document.getElementById("logOutput");
    var table = document.querySelector('table');
    if (table === null ) {
        element.innerHTML += "<p><h3>Select user to create phones for</h3></p>";
        const exportBtn  = document.getElementById("exportButton")
        exportBtn.style.display = 'none';
        //table = document.createElement("table");
        table = utils.createGuxTableWithSelect('userSelect');
        const headerColumns = ['name','id', 'associatedStation'];
        utils.createHeaderWCheckbox(table[1], headerColumns);
        element.appendChild(table[0]).appendChild(table[1]);
    };
    users['entities'].forEach(user => {
            let rowData = [user.name, user.id];
            if ('station' in user && 'associatedStation' in user.station) {
                rowData.push("True");
            }else{
                //newRow.style.backgroundColor ="yellow";
                rowData.push("True");
            };
            utils.createRowWCheckbox(table[1], rowData, user.id, user.name);
            });
}

//// display log output for phone built
async function phoneLogOutput(userName, buildStatus, phoneId, status) {
    const element = document.getElementById("logOutput");
    const exportBtn  = document.getElementById("exportButton")
    exportBtn.style.display = 'block';
    var tableExist = document.querySelector('table');
    if (tableExist === null ) {
        element.innerHTML += "<p><h3>Phone Build Log</h3></p>";
        var table = utils.createGuxTable("phoneBuild_export");
        utils.createHeader(table[1],["Name","status","phoneId","Success/Fail"])
        element.appendChild(table[0]).appendChild(table[1]);
        tableExist = table[1]
    };
    const tableColumns =[userName, buildStatus, phoneId, status];
    utils.createRow(tableExist, tableColumns);
}

//// display all phones built in the system
async function phoneLoop(phones) {
    const element = document.getElementById("logOutput");

    var table = document.querySelector('table');
    if (table === null ) {
        element.innerHTML += "<p><h3>System Phones</h3></p>";
        table = utils.createGuxTable("phone_export");
        element.appendChild(table[0]).appendChild(table[1]);
        utils.createHeader(table[1],["Name","id","phoneSite","phoneBaseName"])
        phones['entities'].forEach(phone => {
            utils.createRow(table[1],[
                phone.name,
                phone.id,
                phone.site.name,
                phone.phoneMetaBase.name
                ])
        });
    }else {
        phones['entities'].forEach(phone => {
        utils.createRow(table,[
            phone.name,
            phone.id,
            phone.site.name,
            phone.phoneMetaBase.name
            ])
        });
    };

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
       const buttonWrap = document.createElement('p');
       const usersButton = document.createElement('gux-button');
       usersButton.setAttribute('accent', 'primary');
       usersButton.id = 'users';
       usersButton.setAttribute('type', 'button');
       usersButton.textContent = 'Select Users Needing Phones';
       buttonWrap.appendChild(usersButton);
       element.appendChild(buttonWrap);
       const btnUsers = document.getElementById('users');
       //// wait for user to make a selection
       const eventPromise = new Promise((resolve) => {
             btnUsers.addEventListener('click', () => {
               if (document.querySelector('input[type="checkbox"]:checked')){
                    resolve(); 
               };
           });
        });

    //// make all table rows clickable setting the checkbox
    utils.makeTableRowsClickable();
    utils.checkboxListerners();

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
    element.innerHTML += '<p><gux-button accent="primary" type="button" id=tempPhone>Set Template Phone </button></p>';
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
