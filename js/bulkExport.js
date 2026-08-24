
import * as utils from "./utils.js";
import { exportUsers } from "./passwordReset.js";
import { exportQueues, getQueues, getMembersOfQueue } from "./queues.js";
import { exportPrompts } from "./prompts.js";
import { exportPhones } from "./phones.js";
import { exportSkills } from "./skills.js";
import { exportRoles } from "./roles.js";
import { exportUserRoles } from "./users.js";
import { exportGroups, getGroups, getMembersOfGroups } from "./groups.js";
import { collectTablesInZip, downloadZipArchive } from "./exportTable.js";

let exportZip;

//// Add the current table(s) to the bulk export zip
async function exportCurrentTable(){
    await collectTablesInZip(exportZip);
}

let clop = async function clearLogOutputPage(){
        const element = document.getElementById('logOutput');
        const x = element.innerText = '';

}

async function runFunctions(funcName){
    await funcName();
}


async function exportAllQueuesMembers(){
    var pageNumber=1
    var pageSize = 99
    //// Loop through pages and write them to a table on the log page
    do {
        var response = await getQueues(pageSize,pageNumber);
        for(let q=0; q < response.entities.length; q++){
            console.log('increment: ', q,' of ', response.entities.length-1);
            try {
                await getMembersOfQueue(
                    response.entities[q].name,
                    response.entities[q].id,
                    response.entities[q].memberCount
                );
                await exportCurrentTable();
            } catch (error) {
                console.warn(`Failed to export members for queue ${response.entities[q].name}:`, error);
            }
            await clop();
        }
        pageNumber ++;
    }
    while (response.lastUri != response.selfUri);

}
async function exportAllGroupMembers(){
    var pageNumber=1
    var pageSize = 99
    //// Loop through pages and write them to a table on the log page
    do {
        var response = await getGroups(pageSize,pageNumber);
        for(let q=0; q < response.entities.length; q++){
            console.log('increment: ', q,' of ', response.entities.length-1);
            try {
                await getMembersOfGroups(response.entities[q].name, response.entities[q].id);
                await exportCurrentTable();
            } catch (error) {
                console.warn(`Failed to export members for group ${response.entities[q].name}:`, error);
            }
            await clop();
        }
        pageNumber ++;
    }
    while (response.lastUri != response.selfUri);

}


export async function exportAll(){
    exportZip = new JSZip();
    utils.loadingMessage('Export All');
    document.getElementById('exportButton').style.display='none';

    const funcToCall = [exportUsers, exportCurrentTable, clop,
                        exportPhones, exportCurrentTable, clop,
                        exportQueues, exportCurrentTable, clop,
                        exportPrompts, exportCurrentTable, clop,
                        exportSkills, exportCurrentTable, clop,
                        exportRoles, exportCurrentTable, clop,
                        exportUserRoles, exportCurrentTable, clop,
                        exportGroups, exportCurrentTable, clop,
                        exportAllQueuesMembers,
                        exportAllGroupMembers]

    for( let i=0; i < funcToCall.length; i++){
        console.log(`calling function: ${funcToCall[i]}`);
        let resp = await runFunctions(funcToCall[i]);
    }

    await downloadZipArchive(exportZip);
    utils.loadingMessageClear('Export All');

    let element = document.getElementById('logOutput');
    element.innerHTML += "<h1><p>Export Complete</p></h1>"
    document.getElementById('exportButton').style.display='none';
}
