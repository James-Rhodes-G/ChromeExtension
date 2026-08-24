
import { runPwdReset, exportUsers, bulkAssignAutoAnswer } from "./passwordReset.js";
import { exportPhones, bulkBuildPhones } from "./phones.js";
import { createMasterAdmin, exportRoles, bulkAssignRoles } from "./roles.js";
import { tableToCSV } from "./exportTable.js";
import { exportQueues, exportQueueUsers } from "./queues.js";
import { loadSchedules } from "./loadSchedules.js";
import { exportSkills } from "./skills.js";
import { exportPrompts } from "./prompts.js";
import { exportAll } from "./bulkExport.js";
import { disconnectInteractions } from "./disconnect.js";

document.getElementById("exportButton").addEventListener('click', function () {
  tableToCSV();
})

  async function getUserInput() {
    return new Promise((resolve) => {
      var input = "CANDELED"
      input = prompt("Please enter something:");
      resolve(input);
    });
  }


  async function main() {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    const urlParams = new URL(tabs[0].url).searchParams
    console.log(urlParams.get('func'));
    switch(urlParams.get('func')) {
      case 'pwdreset':
        const userInput = await getUserInput();
        console.log("User input:", userInput);
        if (userInput == "CANCELED" || userInput == null || userInput == "") {
          const element = document.getElementById("logOutput");
          element.innerHTML += `<p>user canceled pwd input</p>`;
          exit;
        } else {
          console.log(`Pwd wil be set to ${userInput}`);
          runPwdReset(userInput);
        }
        break;  
      
      case 'userList':
        console.log('outputting users');
        exportUsers();
        return;
      
      case 'phoneList':
        console.log('Phone Export');
        exportPhones();
        break;

      case 'queueList':
        console.log('queueList');
        exportQueues();
        break;

      case 'bulkPhoneBuild':
          console.log('bulkPhoneBuild');
          bulkBuildPhones();
          break;

      case 'bulkAssignAutoAnswer':
        console.log('exportPrompts');
        bulkAssignAutoAnswer();
        break;

      case 'bulkAssignRoles':
        console.log('bulkAssignRoles');
        bulkAssignRoles();
        break;
        
      case 'exportAll':
        console.log('exportAll');
        exportAll();
        break;

      case 'queueMemberList':
        console.log('queueMemberList');
        exportQueueUsers();
        break;

      case 'createMasterAdmin':
        console.log('createMasterAdmin');
        createMasterAdmin();
        break;

      case 'loadSchedules':
        console.log('loadSchedules');
        loadSchedules();
        break;
      
      case 'exportRoles':
        console.log('exportRoles');
        exportRoles();
        break;

      case 'exportSkills':
        console.log('exportSkills');
        exportSkills();
        break;

      case 'exportPrompts':
        console.log('exportPrompts');
        exportPrompts();
        break;

      case 'disco':
        console.log("disco interactions");
        disconnectInteractions();
        break;
      
      default:
        console.log("no match");


    }

  }
 
//const inputElement = document.getElementById("plus");
//inputElement.addEventListener("focus", main()); 
//main();
window.addEventListener("focus", main()); 