
// Get using URL Endpoints NO SDK

// export async function getAPI(urlToCall) {
//     console.log(`calling ${urlToCall}`);
//     const authData = await(getAuthInfo());
//     const apiUrl = `${authData.region}${urlToCall}`;
//     const data = await fetch(apiUrl,{
//         method: 'GET',
//         headers: {'Authorization' : `Bearer ${authData.pc_auth}`}
//     })
//     //return await data.json();
//     .then(response => {
//         if (response.status === 429) {
//         // Handle the 429 error
//         const retryAfter = response.headers.get('Retry-After');

//         if (retryAfter) {
//             // Retry the request after the specified time
//             const retryTime = parseInt(retryAfter, 10) * 1000; // Convert to milliseconds
//             console.log(`Retrying in ${retryTime}ms...`);

//             return new Promise(resolve => setTimeout(() => {
//                 resolve(fetch(apiUrl, {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization' : `Bearer ${authData.pc_auth}`
//                     },
//                 }));
//             }, retryTime));
//         } else {
//             // Handle the 429 error without a Retry-After header
//             console.error('Too Many Requests. Retry-After header not found.');
//             // You might want to implement a backoff strategy here
//         }
//         // } else if (!response.ok) {
//         // // Handle other errors
//         // throw new Error(`HTTP error! status: ${response.status}`);
//         } else {
//         return response.json();
//         }
//     })
//     .then(data => {
//         // Do something with the data
//         console.log(data);
//         return data;
//     })
//     .catch(error => {
//         // Handle any errors that occurred during the fetch
//         console.error('Fetch error:', error);
//         return response;
//     });
//     return data;
// }

export async function getAPI(url, maxRetries = 3) {
    let retries = 0;
    const authData = await(getAuthInfo());
    const apiUrl = `${authData.region}${url}`;
    let options = {method: 'GET',
                headers: {'Authorization' : `Bearer ${authData.pc_auth}`}
            }
    while (retries < maxRetries) {
      try {
        const response = await fetch(apiUrl, options);
  
        if (response.status === 429) {
          retries++;
          const retryAfter = response.headers.get('Retry-After') || 1;
          console.warn(`429 error. Retrying after ${retryAfter} seconds...`);
          await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
        } else if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          return response.json();
        }
      } catch (error) {
        console.error("Fetch error:", error);
        throw error;
      }
    }
  
    throw new Error(`Max retries reached. Failed to fetch ${url}`);
  }

export async function postAPI(urlToCall, inbody) {
    const authData = await(getAuthInfo());
    const apiUrl = `${authData.region}${urlToCall}`;
    const data = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${authData.pc_auth}`
            },
            body:JSON.stringify(inbody)
        }).then ((response) =>  { return response});

   
    //return await data;
    return data
};

//// Makes PATCH call and handles 429 Error
export async function patchAPI(urlToCall, inbody){
    const authData = await(getAuthInfo());
    const apiUrl = `${authData.region}${urlToCall}`;
    let data = await fetch(apiUrl, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${authData.pc_auth}`
        },
        body:JSON.stringify(inbody)
    })
    .then(response => {
        if (response.status === 429) {
        // Handle the 429 error
        const retryAfter = response.headers.get('Retry-After');

        if (retryAfter) {
            // Retry the request after the specified time
            const retryTime = parseInt(retryAfter, 10) * 1000; // Convert to milliseconds
            console.log(`Retrying in ${retryTime}ms...`);

            return new Promise(resolve => setTimeout(() => {
                resolve(fetch(apiUrl, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization' : `Bearer ${authData.pc_auth}`
                    },
                    body:JSON.stringify(inbody)
                }));
            }, retryTime));
        } else {
            // Handle the 429 error without a Retry-After header
            console.error('Too Many Requests. Retry-After header not found.');
            // You might want to implement a backoff strategy here
        }
        // } else if (!response.ok) {
        // // Handle other errors
        // throw new Error(`HTTP error! status: ${response.status}`);
        } else {
        return response;
        }
    })
    .then(data => {
        // Do something with the data
        console.log(data);
        return data;
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
        return response;
    });
    return data;
}

export async function otherPostApi(urlToCall, inbody){
    const authData = await(getAuthInfo());
    const apiUrl = `${authData.region}${urlToCall}`;
    let data = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${authData.pc_auth}`
        },
        body:JSON.stringify(inbody)
    })
    .then(response => {
        if (response.status === 429) {
        // Handle the 429 error
        const retryAfter = response.headers.get('Retry-After');

        if (retryAfter) {
            // Retry the request after the specified time
            const retryTime = parseInt(retryAfter, 10) * 1000; // Convert to milliseconds
            console.log(`Retrying in ${retryTime}ms...`);

            return new Promise(resolve => setTimeout(() => {
                resolve(fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization' : `Bearer ${authData.pc_auth}`
                    },
                    body:JSON.stringify(inbody)
                }));
            }, retryTime));
        } else {
            // Handle the 429 error without a Retry-After header
            console.error('Too Many Requests. Retry-After header not found.');
            // You might want to implement a backoff strategy here
        }
        // } else if (!response.ok) {
        // // Handle other errors
        // throw new Error(`HTTP error! status: ${response.status}`);
        } else {
        return response;
        }
    })
    .then(data => {
        // Do something with the data
        //console.log(data);
        return data;
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
        return response;
    });
    return data;
}

export async function deleteAPI(urlToCall) {
    console.log(`calling ${urlToCall}`);
    const authData = await(getAuthInfo());
    const apiUrl = `${authData.region}${urlToCall}`;
    const response = await fetch(apiUrl,{
        method: 'DELETE',
        headers: {'Authorization' : `Bearer ${authData.pc_auth}`}
    })
    return await response;
}

export async function openTabNextToCurrent(url) {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true})
    let newTab = await chrome.tabs.create({url:url, index: tab.index +1, active: true});
    //chrome.tabs.executeScript({target: {tabId: newTab.id}, files: ['log.js'], world: 'MAIN'})
    return newTab;
}

export async function sendLogMessage(log,message, tab) {
    const msg = [log, message];
    console.log(tab.id)
    const logResponse = await chrome.tabs.sendMessage(tab.id, msg);
    return logResponse;
}

export async function getAuthInfo() {
    const data = await(chrome.storage.local.get());
    return data;
    
}

//// Display a message to the user
export function tempAlert(msg,duration,cx,cy){
    var el = document.createElement("div");
    el.setAttribute("style",`position:absolute;top:${cy}px;left:${cx}px;background-color:white;`);
    el.innerHTML = msg;
    setTimeout(function(){
        el.parentNode.removeChild(el);
        },duration);
    document.body.appendChild(el);
}

//// Create a header row for a table
export function createHeader(table, headerColumns){
    const headerRow = table.insertRow();
    headerColumns.forEach( header => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    })
    table.appendChild(headerRow);
};

//// Create a row for a table
export function createRow(table, rowColumns){
    const tableRow = table.insertRow();
    rowColumns.forEach( rowData => {
        const td = document.createElement("td");
        if (!rowData){
            rowData='';
        }
        td.innerHTML = rowData.toString().replaceAll(",","");
        tableRow.appendChild(td);
    })
    table.appendChild(tableRow);
}

//// Create a row with a checkbox for table
export function createRowWCheckbox(table, rowColumns, value){
    const tableRow = table.insertRow();
    const checkbox = document.createElement("INPUT");
    Object.assign(checkbox, {
       type: "checkbox", name:(table.rows.length-1),
       id:"userSelect", value:value
    });
    checkbox.setAttribute("class", "checkbox");
    const td = document.createElement("td");
    td.appendChild(checkbox);
    tableRow.appendChild(td);
    rowColumns.forEach( rowData => {
        const td = document.createElement("td");
        td.textContent = rowData;
        tableRow.appendChild(td);
    })
    table.appendChild(tableRow);
}

//// Create a header with a select all checkbox
export async function createHeaderWCheckbox(table, rowColumns){
    const tableRow = table.insertRow();
    const checkbox = document.createElement("INPUT");
    Object.assign(checkbox, {
       type: "checkbox", name:(table.rows.length-1),
       id:"selectAll"
    });
    checkbox.setAttribute("class", "checkbox");
    const checkboxLabel = document.createElement('label');
    Object.assign( checkboxLabel, {
        HTMLFormElement:'selectAll', textContent:"Select All"
    })
    const th = document.createElement("th");
    th.appendChild(checkbox);
    tableRow.appendChild(th);
    rowColumns.forEach(async function (rowData)  {
        const th = document.createElement("th");
        th.textContent = rowData;
        await tableRow.appendChild(th);
    })
    await table.appendChild(tableRow);
    console.log(document.getElementById('selectAll'))
    document.getElementById('selectAll').addEventListener('change', function () {
        let checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(function (checkbox){
            checkbox.checked = this.checked;
        }, this);
    });
}


//// make table  rows clickable
export async function makeTableRowsClickable(){
    //// Add Event Listener for Table Rows
    //// Makes all TD's clickable for the row
    var table = document.querySelector('table');
    table.addEventListener('click', (event) => {
        if (event.target.tagName === 'TD'){
            let checkbox = event.target.parentNode.cells[0].childNodes[0];
            if (checkbox) { 
                checkbox.checked = !checkbox.checked
            }
        }
    })
}

//// make SelectAll Listener
export async function makeSelectAllListener(){
    ////  Event Listener for Select All Checkbox
    document.getElementById('selectAll').addEventListener('change', function () {
        let checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(function (checkbox){
            checkbox.checked = this.checked;
        }, this);
    });
}

//// make a boxes for bulk role and skill assignment
export async function createBulkSelectBody(leftLabel, rightLabel){
    const bodyDiv=document.createElement('div');
    Object.assign(bodyDiv, {id:"bodyDiv", className:"bodyDiv"})
    bodyDiv.appendChild(Object.assign(document.createElement("div"), {id:'boxLables', innerText:leftLabel}));
    bodyDiv.appendChild(Object.assign(document.createElement("div"), {id:'boxLables', innerText:rightLabel}));
    bodyDiv.appendChild(Object.assign(document.createElement("div"), {id:'selectBox'}));
    bodyDiv.appendChild( Object.assign(document.createElement("div"), {id:'displayBox'}));
    document.getElementById('logOutput').appendChild(bodyDiv);
    let footerDiv=document.getElementsByClassName("FooterContainer");
    footerDiv[0].appendChild(Object.assign(document.createElement("button"), {id:'selectButton', innerText:"Done"}));
}

//// create the select box for each item in the above boxes
export function createDropBoxSelectBox(dropBoxOptions, container) {
    const dropBox = document.createElement('select');
    dropBoxOptions.forEach(i => {
        let dbOption = document.createElement('option');
            dbOption.value = i.value;
            dbOption.text = i.text;
           dropBox.appendChild(dbOption);
    });
    container.appendChild(dropBox)
    return container
}

////populate the above dropboxes
//// Create the items to move between the selection boxes
export function createBulkItemSelector(itemName, itemText, dropBoxOptions){
    const itemSelector = document.createElement('div');
    Object.assign(itemSelector, {id:'itemSelector', title: itemText });
    itemSelector.appendChild(Object.assign(document.createElement('div'),{id:"selectText", innerText:itemName, title:itemText}));
    let newDiv = Object.assign(document.createElement('div'),{id:"selectSecond", className:'smallbox'})
    newDiv = createDropBoxSelectBox(dropBoxOptions, newDiv);
    itemSelector.appendChild(newDiv);
    let selectBox = document.getElementById('selectBox')
    selectBox.appendChild(itemSelector);
}

//// listener to the above box allowing items to move between
//// and making a drop down box appear when the items move to the right
export async function addListenerToSelectItems(){
    const rightSideBox = document.getElementById('displayBox');
    const leftSideBox = document.getElementById('selectBox');
    const selectItems=document.querySelectorAll('#selectText');
    selectItems.forEach(item => {
        item.addEventListener('click', () => {
            if (event.target.parentNode.parentNode.id === "selectBox"){
                //console.log(event)
                rightSideBox.appendChild(event.target.parentNode);
            } else {
                leftSideBox.appendChild(event.target.parentNode);
            }
        });
    }); 
}

//// returns selected items from above in and array of objects
export function getSelectedRoles(){
    let selectedRoles =[];
    const updateItems = document.querySelectorAll('#displayBox>#itemSelector');
    updateItems.forEach( item => {
        //console.log(item.childNodes[1].childNodes[0].selectedOptions[0].innerText," : ",
        //    item.childNodes[1].childNodes[0].selectedOptions[0].value)
        selectedRoles.push({itemName:item.childNodes[0].innerText,
            itemId:item.childNodes[0].title,
            dropName:item.childNodes[1].childNodes[0].selectedOptions[0].innerText,
            dropId:item.childNodes[1].childNodes[0].selectedOptions[0].value})
        });
    return selectedRoles;
};
//// alphabetical sorting 
export async function alphaSortByName(resp){
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

export function loadingMessage(id){
    let loadingTag =  document.getElementsByClassName("plus");
    let loadMsg = document.createElement('p');
    loadMsg.setAttribute('class','blink');
    loadMsg.setAttribute('id',id);
    loadMsg.innerText=`LOADING ${id} .... PLEASE WAIT`
    loadingTag[0].appendChild(loadMsg);
}

export function loadingMessageClear(id){
    let loadMsg = document.getElementById(id);
    loadMsg.remove()
}

export async function toggleButtonStatus(btn, status){
      // Check current state and toggle
  if (status.toLowerCase()=="enable") {
    btn.disabled = false; // Enable button
  } else {
    btn.disabled = true;  // Disable button
  }
}

export async function displayExportButton(){
    const exportBtn  = document.getElementById("exportButton")
    exportBtn.style.display = 'inline';
    return;
}

export async function showNextPageButton(){
    let expBtn = document.getElementById('export');
        expBtn.style.display='inline'; 
        var btn = document.getElementById('nextPage')
        if (!btn){
            var btn = document.createElement('button');
            btn.id='nextPage';
            btn.innerText='Next Page';
            expBtn.after(btn);
        }
    return(btn);
}

export async function createDivisionDropdown(container) {
        //// get divisons
        var pageSize=100;
        var pageNumber=1;
        var dropBoxOptions=[]
        const dropBox = document.createElement('select');
        dropBoxOptions.push({value:"*",text:"All"});
        do{
            const apiToCall = `/api/v2/authorization/divisions?pageSize=${pageSize}&pageNumber=${pageNumber}&objectCount=true`;
            var resp = await getAPI(apiToCall);
            resp.entities = await alphaSortByName(resp.entities);
            resp.entities.forEach( async function (division) {
                let dbOption = document.createElement('option');
                dbOption.value = division.id;
                dbOption.text = division.name;
               dropBox.appendChild(dbOption);
            })
            pageNumber ++
        } while (resp.selfUri != resp.lastUri);
        container.appendChild(dropBox);
    return dropBoxOptions;
}

// function createDivisionSelectBox(dropBoxOptions, container) {
//     const dropBox = document.createElement('select');
//     dropBoxOptions.forEach(i => {
//         let dbOption = document.createElement('option');
//             dbOption.value = i.value;
//             dbOption.text = i.text;
//            dropBox.appendChild(dbOption);
//     });
//     container.appendChild(dropBox)
//     return container
// }