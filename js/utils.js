import { getDivisions } from "./roles.js";
import { getUiState } from "./uiState.js";
// Get using URL Endpoints NO SDK


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
        throw error;
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
        console.log(data);
        return data;
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
        throw error;
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

//// Create GUX table
export function createGuxTable(tableId){
    let guxDiv = document.createElement("gux-table");
    Object.assign(guxDiv, {'resizable-columns':'', compact:'true', 'empty-message':'--'});
    guxDiv.setAttribute('resizable-columns','');
    const table = document.createElement("table");
    Object.assign(table, {slot:"data", id:tableId});
    return [guxDiv,table];
}

//// Create GUX table with Selectable Rows
export function createGuxTableWithSelect(tableId){
    let guxDiv = document.createElement("gux-table");
    Object.assign(guxDiv, {'resizable-columns':'', compact:'true', 'empty-message':'--', 'selectable-rows':'true'});
    guxDiv.setAttribute('resizable-columns','');
    const table = document.createElement("table");
    Object.assign(table, {slot:"data", id:tableId});
    return [guxDiv,table];
}

//// Create a header row for a table
export function createHeader(table, headerColumns){
    const tHead = table.createTHead();
    const headerRow = tHead.insertRow();
    headerColumns.forEach( header => {
        const th = document.createElement("th");
        Object.assign(th,{"data-column-name":"${header}"})
        th.textContent = header;
        headerRow.appendChild(th);
    })
    table.appendChild(tHead);
};

//// Create a row for a table
export function createRow(tableIn, rowColumns){
    if (tableIn.tBodies.length == 0){
        var table = tableIn.createTBody();
    }else{
        var table = tableIn.tBodies[0];
    }
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

//// Create a row with a radio button
export function createRowWRadio(tableIn, rowColumns, value, id=''){
      if (tableIn.tBodies.length == 0){
        var table = tableIn.createTBody();
    }else{
        var table = tableIn.tBodies[0];
    }
    const tableRow = table.insertRow();
    const radioTD = document.createElement('td');
    const rowRadio = document.createElement("gux-form-field-radio");
    Object.assign(rowRadio, {"label-position":"screenreader"});
    const rowRadioBtn = document.createElement('input');
    Object.assign(rowRadioBtn, {id:"phoneSelect", name:"radio", type:"radio", slot:"input",value:value});
    const rowRadioBtnLabel = document.createElement('label');
    Object.assign(rowRadioBtnLabel,{slot:"label"});
    rowRadio.appendChild(rowRadioBtn)
    rowRadio.appendChild(rowRadioBtnLabel);
    tableRow.appendChild(radioTD).appendChild(rowRadio);
    rowColumns.forEach( rowData => {
        const td = document.createElement("td");
        if (!rowData){
            td.innerHTML = '';
        } else if (typeof(rowData)==='object'){
            td.appendChild(rowData);
            tableRow.appendChild(td);
        } else {
            td.innerHTML = rowData.toString().replaceAll(",","");
        }
        tableRow.appendChild(td);
    })
    table.appendChild(tableRow);
}




//// Create a row with a checkbox for table
export function createRowWCheckbox(table, rowColumns, value, id=''){
    const tableRow = table.insertRow();
    const checkbox = document.createElement("INPUT");
    Object.assign(checkbox, {
       type: "checkbox", name:(table.rows.length-1),
       id:id, value:value,
       className : "checkbox"
    });
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
    //add functionality to allow the creatiion of multiple tables on the samepage
    try {
       var selectAllId = "selectAll_"+table.id;
       var tableId = table.id; 
    }catch {
        selectAllId='selectAll';
        tableId = ''
    }
    Object.assign(checkbox, {
       type: "checkbox", name:(table.rows.length-1), className:"checkbox",
       id:selectAllId
    });
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
    // add selectAll listener
    //console.log(`adding listener for ${selectAllId}`);
    checkbox.addEventListener('change', function () {
        console.log('box checked')
        if (!table.id) {
            var checkboxes = document.querySelectorAll(`input[type="checkbox"]`); 
        }else{
            var checkboxes = document.querySelectorAll(`table[id="${tableId}"] input[type="checkbox"]`);            
        }
        checkboxes.forEach(function (checkbox){
            checkbox.checked = this.checked;
        }, this);
        countCheckBoxes();
    });
}


//// make table  rows clickable
export async function makeTableRowsClickable(){
    //// Add Event Listener for Table Rows
    //// Makes all TD's clickable for the row
    var tables = document.querySelectorAll('table');
    tables.forEach( table =>{
        table.addEventListener('click', (event) => {
            if (event.target.tagName === 'TD'){
                let checkbox = event.target.parentNode.cells[0].childNodes[0];
                if (checkbox) { 
                    checkbox.checked = !checkbox.checked
                    countCheckBoxes();
                }
            }
        })
    })
}

export async function checkboxListerners() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach( checkbox => {
        checkbox.addEventListener('change', function () {
        countCheckBoxes();
        })
    });
}

export async function countCheckBoxes() {
    var countOfBoxes = document.querySelectorAll('input[type="checkbox"]:checked:not([id^="selectAll"])');
    try {
        document.getElementsByClassName('checkBoxCount')[0].innerText=countOfBoxes.length
    }catch{
        console.log("no place to put total value")
    }
    try {
        var rightGutter = document.getElementById("rightGutter");
        rightGutter.innerHTML = '';
        const title = document.createElement('h4');
        title.className = 'herotype';
        title.textContent = 'Selected Items';
        rightGutter.appendChild(title);

        const list = document.createElement('div');
        list.className = 'selected-schedule-chips';
        countOfBoxes.forEach(box => {
            const item = document.createElement('span');
            item.className = 'selected-schedule-chip';
            item.textContent = box.id;
            item.title = box.id;
            list.appendChild(item);
        });
        rightGutter.appendChild(list);
    } catch (err){
        console.log('no place to put the value')
    }
       
}

//// make SelectAll Listener
export async function makeSelectAllListener(){
    ////  Event Listener for Select All Checkbox
    //document.getElementById('selectAll').addEventListener('change', function () {
    document.querySelector('[id^="selectAll"]').addEventListener('change', function (){
        let checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(function (checkbox){
            checkbox.checked = this.checked;
        }, this);
        countCheckBoxes();
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
    footerDiv[0].appendChild(Object.assign(document.createElement("gux-button"), {accent:'primary',id:'selectButton', innerText:"Done"}));
}

//// create the select box for each item in the above boxes
export function createDropBoxSelectBox(dropBoxOptions, container, placeHolderMessage='') {
    const dropDown = document.createElement('gux-dropdown');
    Object.assign(dropDown,{"filter-type":"starts-with", placeholder:placeHolderMessage})
    const dropBox = document.createElement('gux-listbox');
    dropBoxOptions.forEach(i => {
        let dbOption = document.createElement('gux-option');
            dbOption.value = i.value;
            dbOption.innerText = i.text;
            dropBox.appendChild(dbOption);
    });
    container.appendChild(dropDown).appendChild(dropBox)
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
        item.addEventListener('click', (event) => {
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
        selectedRoles.push({itemName:item.firstChild.textContent,
            itemId:item.firstChild.title,
            dropName:item.childNodes[1].firstChild.firstChild.querySelector('[aria-selected="true"]').textContent,
            dropId:item.childNodes[1].firstChild.firstChild.querySelector('[aria-selected="true"]').value})
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

// export async function createDivisionSelectBox(container) {
//         //// get divisons
//         var pageSize = 99
//         var pageNumber = 0;
//         //var dropBoxOptions=[]
//         const dropDown = document.createElement('gux-dropdown');
//         //Object.assign(dropDown, {"filter-type":"starts-with", placeholder:"Select a Division"});
//         dropDown.setAttribute('filter-type', 'starts-with');
//         dropDown.setAttribute('placeholder', 'Select a Division');

//         const dropBox = document.createElement('gux-listbox');
//     do{
//         const apiToCall = `/api/v2/authorization/divisions?pageSize=${pageSize}&pageNumber=${pageNumber}&objectCount=true`;
//         var resp = await getAPI(apiToCall);
//         resp.entities = await alphaSortByName(resp.entities);
//         resp.entities.forEach( async function (division) {
//             // let dbOption = document.createElement('option');
//             let dbOption = document.createElement('gux-option');
//             //Object.assign(dbOption,{className:"gux-active"})
//             dbOption.value = division.id;
//             dbOption.textContent = division.name;
//            dropBox.appendChild(dbOption);
//         })
//         pageNumber ++
//     } while (resp.selfUri != resp.lastUri);
//     container.appendChild(dropDown).appendChild(dropBox)
//     //return container
// }

//GPT Version:
export async function createDivisionSelectBox(container) {
  const uiState = getUiState();

  const select = document.createElement('select');
  select.id = 'divisionSelect';
  select.setAttribute('aria-label', 'Divisions');

  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = 'Select a Division';
  select.appendChild(placeholder);

  let pageNumber = 0;
  const pageSize = 99;
  let resp;

  do {
    const apiToCall =
      `/api/v2/authorization/divisions?pageSize=${pageSize}&pageNumber=${pageNumber}&objectCount=true`;

    resp = await getAPI(apiToCall);
    resp.entities = await alphaSortByName(resp.entities);

    resp.entities.forEach(division => {
      uiState.divisionMap.set(division.id, division.name);

      const option = document.createElement('option');
      option.value = division.id;
      option.textContent = division.name;
      select.appendChild(option);
    });

    pageNumber++;
  } while (resp.selfUri !== resp.lastUri);

  const updateSelectedDivision = () => {
    const selectedId = select.value;
    if (!selectedId) {
      return;
    }

    const selectedName = uiState.divisionMap.get(selectedId) || '';
    if (!selectedName) {
      return;
    }

    uiState.selectedDivisionId = selectedId;
    uiState.selectedDivisionName = selectedName;

    const display = document.getElementById('selectedDivisionDisplay');
    if (display) {
      display.textContent = `Selected division: ${uiState.selectedDivisionName}`;
    }
  };

  select.addEventListener('change', updateSelectedDivision);
  container.appendChild(select);

  return select;
}




export async function createDivisionDropdown(container) {
        //// get divisons
        var pageSize=100;
        var pageNumber=1;
        var dropBoxOptions=[]
        const dropDown = document.createElement('gux-dropdown');
        Object.assign(dropDown, {"filter-type":"starts-with", placeholder:"Select a Division"});
        const dropBox = document.createElement('gux-listbox');
        dropBoxOptions.push({value:"*",text:"All"});
        do{
            const apiToCall = `/api/v2/authorization/divisions?pageSize=${pageSize}&pageNumber=${pageNumber}&objectCount=true`;
            var resp = await getAPI(apiToCall);
            resp.entities = await alphaSortByName(resp.entities);
            resp.entities.forEach( async function (division) {
                // let dbOption = document.createElement('option');
                let dbOption = document.createElement('gux-option');
                dbOption.value = division.id;
                dbOption.innerText = division.name;
               dropBox.appendChild(dbOption);
            })
            pageNumber ++
        } while (resp.selfUri != resp.lastUri);
        container.appendChild(dropDown).appendChild(dropBox);
    return dropBoxOptions;
}


export async function awaitModalResponse(){
    let modalButtons = document.querySelectorAll('[id^="modal"]');
    modalButtons.forEach(mBtn => {
        return new Promise(resolve => {
            mBtn.addEventListener('click', (event) =>{
            resolve(event.target.id)
            })
        })
    })
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
