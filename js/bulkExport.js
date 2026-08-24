import { getAPI, sendLogMessage, postAPI, otherPostApi, createHeader } from "./utils.js";
import { tableToCSV } from "./exportTable.js";
import { exportUsers } from "./passwordReset.js";
import { exportQueues, getQueues, getMembersOfQueue } from "./queues.js";
import { exportPrompts } from "./prompts.js";
import { exportPhones } from "./phones.js";
import { exportSkills } from "./skills.js";
import { exportRoles } from "./roles.js";



//// Force export of user file
async function exportCurrentTable(){
    return new Promise(( resolve, reject) =>{
        console.log('clicking button');
        const btn = document.getElementById('exportButton');
        btn.click();
        setTimeout(() => {
            resolve('export complete');
        }, 1000);    
    })

}

let clop = async function clearLogOutputPage(){
        const element = document.getElementById('logOutput');
        const x = element.innerText = '';

}

async function runFunctions(funcName){
    await funcName();
    // return new Promise((resolve, reject) =>  {
    //     setTimeout(() =  > async function (){
    //         funcName();
    //         resolve('Table Loaded!');
    //     }, 5000);
    // });
}


async function exportAllQueuesMembers(){
    var pageNumber=1
    var pageSize = 99
    //// Loop through pages and write them to a table on the log page
    do {
        var response = await getQueues(pageSize,pageNumber);
        for(let q=0; q < response.entities.length; q++){
            console.log('increment: ', q,' of ', response.entities.length-1);
            var qMembers = await getMembersOfQueue(response.entities[q].name,response.entities[q].id)
            await exportCurrentTable();
            await clop();
        }
        pageNumber ++;
    }
    while (response.lastUri != response.selfUri);

}


export async function exportAll(){
    const funcToCall = [exportUsers, exportCurrentTable, clop,
                        exportPhones, exportCurrentTable, clop,
                        exportQueues, exportCurrentTable, clop,
                        exportPrompts, exportCurrentTable, clop,
                        exportSkills, exportCurrentTable, clop,
                        exportRoles, exportCurrentTable, clop,
                        exportAllQueuesMembers]

    for( let i=0; i < funcToCall.length; i++){
        console.log(`calling function: ${funcToCall[i]}`);
        //let resp = await funcToCall[i]();
        let resp = await runFunctions(funcToCall[i]);
        //console.log(resp);
    }
    let element = document.getElementById('logOutput');
    element.innerHTML += "<h1><p>Export Complete</p></h1>"
    document.getElementById('exportButton').style.display='none';
}