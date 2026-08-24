
import * as utils from './utils.js';

//// List of schedule json files in the Schedule folder
const scheduleList = {
    Open_Hours_Weekdays:"Open_Hours_Weekdays.json",Closed_Hours_Weekdays:"Closed_Hours_Weekdays.json",
    Closed_Hours_Weekends:"Closed_Hours_Weekends_[Saturday_and_Sunday].json",
    Meeting:"Meeting.json", UAT_Test:"UAT_TEST.json", New_Years_Day:"New_Year's_Day.json",
    Martin_Luther_King_Jr_Day:"Martin_Luther_King,_Jr._Day.json",
    Lincolns_Birthday:"Lincolns_Birthday.json",Washingtons_Birthday:"Washingtons_Birthday.json",
    Truman_Day:"Truman_Day.json", Memorial_Day:"Memorial_Day.json",
    Juneteenth:"Juneteenth.json", Independence_Day:"Independence_Day.json",
    Labor_Day:"Labor_Day.json", Columbus_Day:"Columbus_Day.json",
    Veterans_Day:"Veterans_Day.json", Thanksgiving_Day:"Thanksgiving_Day.json",
    Thanksgiving_Day_Friday:"Thanksgiving_Day_Friday.json",
    Christmas_Eve:"Christmas_Eve.json", Christmas_Day:"Christmas_Day.json"
    }
    


//// display list of schedules with checkboxes to select which to add
async function scheduleSelect(){
    //// hide export button
    document.getElementById('exportButton').style.display="none";
    //// provide header for direction
    document.getElementById('logOutput').innerHTML="<h2> Select schedules to load</h2>"
    await utils.createDivisionDropdown(document.getElementById('logOutput'));
    var table=document.createElement("table");
    utils.createHeaderWCheckbox(table, ["Schedule Name"]);
    Object.keys(scheduleList).forEach(function (schedule) {
        utils.createRowWCheckbox(table, [schedule], [scheduleList[schedule]]);
    });
    document.getElementById('logOutput').appendChild(table);
    document.getElementById("logOutput").innerHTML += '<p><button id=schedule type="button"> Load Schedules </button></p>';
    document.getElementById("logOutput").appendChild
    const btnSched = document.getElementById('schedule');
    //// Add listener for user click a button
    const eventPromise = new Promise((resolve) => {
    btnSched.addEventListener('click', () => {
        if (document.querySelectorAll('input[type="checkbox"]:checked')){
                resolve(); 
            };
        });
    });
    //// Make all table rows clickable
    utils.makeTableRowsClickable();

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
        `<a href=${region}/directory/#/admin/routing/scheduling/schedules/${response.id} _target=blank>${response.name}</a>`,
         `<a href=${region}/directory/#/admin/routing/scheduling/schedules/respons.id _target=blank>${response.id}</a>`,
         status]);  
    document.getElementById('logOutput').appendChild(table);
}

////  Actual comands to run this module
export async function loadSchedules(){
    //// create schedule select page and wait for user to 
    //// selecte schedules to load
    await scheduleSelect();
    const divisionId = document.querySelector("select").selectedOptions[0].value;
    const divisionName = document.querySelector("select").selectedOptions[0].text;
    const schedulesToLoad = document.querySelectorAll('input[type="checkbox"]:checked');
    const table = document.querySelector('table');
    document.getElementById("logOutput").innerHTML = ''; /// Clear the page
    const exportBtn  = document.getElementById("exportButton")
    exportBtn.style.display = 'block';
    schedulesToLoad.forEach( async function (schedule){
    //// collect schedule information in case there is a failure
        const schdInfo = {};
        schdInfo.name = table.rows[schedule.name].cells[1].textContent;
        schdInfo.id = "N/A";
        //// load Schedule JSON
        var loadSchedule = {};
        var data = await fetch(`./Schedules/${schedule.value}`)
            .then((res) => {return res.json()});
        Object.assign(data, {'division': {'id': divisionId}});
        data.name = `${divisionName} ${data.name}`;
        Object.assign(loadSchedule, data);
        //// make POST call
        const scheduleResponse = await postSchedule(loadSchedule)
            .then((res) => {return res});
        if (scheduleResponse.ok){
            var jsonScheduleResponse = await scheduleResponse.json();
        }else{
            var jsonResp  = await scheduleResponse.json();
            var jsonScheduleResponse={};
            Object.assign(jsonScheduleResponse, schdInfo)
            jsonScheduleResponse.id=jsonResp.message
        }
        logScheduleResponse(scheduleResponse.status, jsonScheduleResponse);
    })
    
}