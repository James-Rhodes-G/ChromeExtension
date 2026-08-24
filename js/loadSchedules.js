
import * as utils from './utils.js';
import { getUiState } from './uiState.js';
     

function createSelectAllListeners(){
    const boxes=document.querySelectorAll('[id^="selectAll"]')
    boxes.forEach(box => {
        box.addEventListener("change", function() {
            var checkboxes = document.querySelectorAll(`table[id="${box.id.slice(-12)}"] input[type="checkbox"]`);
            checkboxes.forEach(function (checkbox){
            checkbox.checked = this.checked;
        }, this);
        })
    })
}


//// display list of schedules with checkboxes to select which to add
async function scheduleSelect(){
    //// hide export button
    document.getElementById('exportButton').style.display="none";
    //// provide header for direction
    const container = document.getElementById('logOutput');
    container.innerHTML='<h3 class="heavy hero"> Select schedules to load</h3>';
    const divisionTitle = document.createElement("h4");
    divisionTitle.id = "dropBoxTitle";
    divisionTitle.textContent = "Select Division for Schedule";
    container.appendChild(divisionTitle);
    //await utils.createDivisionDropdown(container);
    const dropDiv = document.createElement("form");
    container.appendChild(dropDiv);
    const dropDownMap = await utils.createDivisionSelectBox(dropDiv);
    //await utils.createDivisionDropdown(dropDiv);
    const scheduleTitle = document.createElement("h3");
    scheduleTitle.id = "dropBoxTitle";
    scheduleTitle.className = "checkBoxTitle";
    scheduleTitle.textContent = "Schedules Selected";
    container.appendChild(scheduleTitle);
    const scheduleCount = document.createElement("h3");
    scheduleCount.id = "dropBoxTitle";
    scheduleCount.className = "checkBoxCount";
    scheduleCount.textContent = "0";
    container.appendChild(scheduleCount);
    await addTabs();
    const scheduleButtonWrap = document.createElement("p");
    const scheduleButton = document.createElement("gux-button");
    scheduleButton.setAttribute("accent", "primary");
    scheduleButton.id = "schedule";
    scheduleButton.setAttribute("type", "button");
    scheduleButton.textContent = "Load Schedules";
    scheduleButtonWrap.appendChild(scheduleButton);
    container.appendChild(scheduleButtonWrap);
    //// Add listener for user click a button
    const btnSched = document.getElementById('schedule');
    const eventPromise = new Promise((resolve) => {
        btnSched.addEventListener('click', () => {
            if (document.querySelectorAll('input[type="checkbox"]:checked')){
                    resolve(); 
                };
            });
    });
    //// Add Event Listeners
    utils.makeTableRowsClickable();
    createSelectAllListeners();
    utils.checkboxListerners();  //// so we can count checkboxes

    await eventPromise
}

//// call POST with file contents
async function postSchedule (body){
    const apiToCall = "/api/v2/architect/schedules"
    const response = await utils.postAPI(apiToCall, body);
    return response
}

//// update log output table with new schedule name and id/status
async function logScheduleResponse(status, response){
    const authData = await utils.getAuthInfo();
    const region  = authData.region.replace('api','apps');
    var table = document.querySelector("table");
    if (table === null){
        table = document.createElement("table");
        Object.assign(table, {id:"schedule_import"});
        utils.createHeader(table, ["scheduleName", "scheduleId", "status"]);
    }
    utils.createRow(table, [
        `<a href=${region}/directory/#/admin/routing/scheduling/schedules/${response.id.replace('.','').slice(-36)} _target=blank>${response.name}</a>`,
         `<a href=${region}/directory/#/admin/routing/scheduling/schedules/${response.id.replace('.','').slice(-36)} _target=blank>${response.id}</a>`,
         status]);  
    document.getElementById('logOutput').appendChild(table);
}

////  Actual comands to run this module
export async function loadSchedules(){
    //// create schedule select page and wait for user to 
    //// select schedules to load
    await scheduleSelect();
    const uiState = getUiState();
    const divisionId = uiState.selectedDivisionId || '';
    const divisionName = uiState.selectedDivisionName || '';
    const schedulesToLoad = document.querySelectorAll('input[type="checkbox"]:checked:not([id^="selectAll"])');
    document.getElementById("logOutput").innerHTML = ''; /// Clear the page
    const exportBtn  = document.getElementById("exportButton")
    exportBtn.style.display = 'block';
    //// Get Global Schedules
    const dataFile = await fetch('./Schedules/Global_Holiday.json').then((data)=> {
        return data.json();
        });
    schedulesToLoad.forEach( async function (schedule){
        // load Schedule JSON
        var loadSchedule = {};
        const data = dataFile[schedule.value.slice(0,3)][schedule.value.slice(4)]
        Object.assign(data, {'division': {'id': divisionId}});
        data.name = `${divisionName} ${schedule.value.slice(0,3)} ${data.name}`;
        Object.assign(loadSchedule, data);
        //// make POST call
        const scheduleResponse = await postSchedule(loadSchedule)
            .then((res) => {return res});
        if (scheduleResponse.ok){
            var jsonScheduleResponse = await scheduleResponse.json();
        }else{
            var jsonResp  = await scheduleResponse.json();
            var jsonScheduleResponse={};
            Object.assign(jsonScheduleResponse, data);
            jsonScheduleResponse.id=jsonResp.message
            console.log(jsonScheduleResponse);
        }
        logScheduleResponse(scheduleResponse.status, jsonScheduleResponse);
    })
    
}


async function addTabs(){
    var data = await fetch('./Schedules/Global_Holiday.json').then((data)=> {
                return data.json();
                });

    var element = document.getElementById('logOutput');
    var container = document.createElement('gux-tabs-advanced');
    var tabList = document.createElement('gux-tab-advanced-list');
    Object.assign(tabList,{slot:'tab-list', "show-new-tab-button":'false'});
    element.appendChild(container).appendChild(tabList);
    let currentTab = [];
    let tabid=0
    Object.keys(data).forEach( key => {
        currentTab[key] = document.createElement('gux-tab-advanced');
        tabid++
        Object.assign(currentTab[key],{'tab-id':`1-${tabid}`, id:`1-${tabid}`,innerHTML:key});
        currentTab[key].setAttribute('tab-id',`1-${tabid}`);
        //console.log(currentTab[key]);
        const tabPanel = document.createElement('gux-tab-advanced-panel');
        Object.assign(tabPanel,{'tab-id':`1-${tabid}`,id:`1-${tabid}`});
        tabPanel.setAttribute('tab-id',`1-${tabid}`);
        var guxTable = utils.createGuxTableWithSelect(`${key}_Schedule`);
        var headers = ['name','description']
        utils.createHeaderWCheckbox(guxTable[1],headers);
        const schedules = Object.keys(data[key]);
        schedules.forEach(function (schedule) {
            const scheduleKey = `${key}_${schedule}`;
            const scheduleLabel = `${key} - ${data[key][schedule].name}`;
            utils.createRowWCheckbox(
                guxTable[1],
                [data[key][schedule].name, data[key][schedule].description],
                scheduleKey,
                scheduleLabel
            );
        });
        tabList.appendChild(currentTab[key]);
        tabPanel.appendChild(guxTable[0]).appendChild(guxTable[1]);
        container.appendChild(tabPanel);
        //console.log(key);
    });
}
