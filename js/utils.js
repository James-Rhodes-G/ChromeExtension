
// Get using URL Endpoints NO SDK

export async function getAPI(urlToCall) {
    console.log(`calling ${urlToCall}`);
    const authData = await(getAuthInfo());
    const apiUrl = `${authData.region}${urlToCall}`;
    const response = await fetch(apiUrl,{
        method: 'GET',
        headers: {'Authorization' : `Bearer ${authData.pc_auth}`}
    })
    return await response.json();
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
export function tempAlert(msg,duration){
    var el = document.createElement("div");
    el.setAttribute("style","position:absolute;top:40%;left:20%;background-color:white;");
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
        td.innerHTML = rowData;
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