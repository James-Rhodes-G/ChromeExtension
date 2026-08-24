//Imports go here.  Make sure that functions to be imported, are marked for export.
// Make sure to add any new files to the manifest to ensure that they get loaded.
// Make sure to use the utils, to maintatin consistent GET/POST etc behavior

import { getAPI , openTabNextToCurrent } from "./js/utils.js";
import { tableToCSV } from "./js/exportTable.js";
import { callSpoof } from "./js/callSpoof.js";


//// Set Sidepanel options:
chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error));



    //// Add all Genesys Regions as usable Regions
    const allowedPages=["https://apps.apne3.pure.cloud",
        "https://apps.apne2.pure.cloud",
        "https://apps.mypurecloud.com.au",
        "https://apps.mypurecloud.jp",
        "https://apps.cac1.pure.cloud",
        "https://apps.mypurecloud.de",
        "https://apps.mypurecloud.ie",
        "https://apps.euw2.pure.cloud",
        "https://apps.euc2.pure.cloud",
        "https://apps.mec1.pure.cloud",
        "https://apps.sae1.pure.cloud",
        "https://apps.mypurecloud.com",
        "https://apps.use2.us-gov-pure.cloud",
        "https://apps.usw2.pure.cloud"];



// add change Listener for tabs
  chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
          if (!tab.url) return;
          const url = new URL(tab.url);
          if (allowedPages.includes(url.origin)) {
            await chrome.sidePanel.setOptions({
              tabId,
              path: 'sidepanel.html?'+tabId,
              enabled: true
            });
          } else {
            // Disables the side panel on all other sites
            await chrome.sidePanel.setOptions({
              tabId,
              enabled: false
            });
          }
        });




 chrome.runtime.onMessage.addListener((request, sender, sendResponse) =>{
  testRequest(request).then(sendResponse);
  return true;
});

async function testRequest(request) {
  console.log(`we received:  ${request}`);
  switch(request[0]) {
    case "orgMe":
      let apiToCall = '/api/v2/organizations/me';
      let orgResponse = await getCalls(apiToCall);
      return orgResponse;

    case "passwordReset":
      // add password reset logic here
      let pwdReset_Tab = await openTabNextToCurrent('./log.html?func=pwdreset');
      console.log(pwdReset_Tab);
      return;
    
    case "userList":
      let userList_Tab = await openTabNextToCurrent('./log.html?func=userList');
      console.log(userList_Tab);
      break;
    
    case "userRoles":
      let userRoles_Tab = await openTabNextToCurrent('./log.html?func=userRoles');
      console.log(userRoles_Tab);
      break;
    
    case "phoneList":
      let phoneList_tab = await openTabNextToCurrent('./log.html?func=phoneList')
      console.log(phoneList_tab);
      break;

    case "queueList":
      let queueList_tab = await openTabNextToCurrent('./log.html?func=queueList');
      console.log(queueList_tab);
      break;

    case "queueMemberList":
      let queueMemberList_tab = await openTabNextToCurrent('./log.html?func=queueMemberList');
      console.log(queueMemberList_tab);
      break;
      
    case "bulkPhoneBuild":
      let bulkPhoneBuild_tab = await openTabNextToCurrent('./log.html?func=bulkPhoneBuild')
      console.log(bulkPhoneBuild_tab);
      break;
    
    case "bulkAssignAutoAnswer":
      let bulkAssignAutoAnswer_tab = await openTabNextToCurrent('./log.html?func=bulkAssignAutoAnswer')
      console.log(bulkAssignAutoAnswer_tab);
      break;

    case "bulkRoleAssign":
      let bulkRoleAssign_tab = await openTabNextToCurrent('./log.html?func=bulkAssignRoles')
      console.log(bulkRoleAssign_tab);
      break;

    case "bulkAssignSkills":
      let bulkAssignSkills_tab = await openTabNextToCurrent('./log.html?func=bulkAssignSkills')
      console.log(bulkAssignSkills_tab);
      break;

    case "bulkSelectUserLogoff":
      let bulkSelectUserLogoff_tab = await openTabNextToCurrent('./log.html?func=bulkSelectUserLogoff')
      console.log(bulkSelectUserLogoff_tab);
      break;

    case "userLogoff":
      let userLogoff_tab = await openTabNextToCurrent('./log.html?func=userLogoff')
      console.log(userLogoff_tab);
      break;
      
    case "masterAdmin":
      let createMasterAdmin_tab = await openTabNextToCurrent('./log.html?func=createMasterAdmin')
      console.log(createMasterAdmin_tab);
      break;

    case "loadSchedules":
      let loadSchedules_tab = await openTabNextToCurrent('./log.html?func=loadSchedules')
      console.log(loadSchedules_tab);
      break;

    case "exportRoles":
      let exportRoles_tab = await openTabNextToCurrent('./log.html?func=exportRoles')
      console.log(exportRoles_tab);
      break;

    case "exportSkills":
      let exportSkills_tab = await openTabNextToCurrent('./log.html?func=exportSkills')
      console.log(exportSkills_tab);
      break;

    case "exportPrompts":
      let exportPrompts_tab = await openTabNextToCurrent('./log.html?func=exportPrompts')
      console.log(exportPrompts_tab);
      break;
    
    case "exportGroups":
        let exportGroups_tab = await openTabNextToCurrent('./log.html?func=exportGroups')
        console.log(exportGroups_tab);
        break;
        
    case "exportGroupUsers":
        let exportGroupUsers_tab = await openTabNextToCurrent('./log.html?func=exportGroupUsers')
        console.log(exportGroupUsers_tab);
        break;

    case "exportAll":
      let exportAll_tab = await openTabNextToCurrent('./log.html?func=exportAll')
      console.log(exportAll_tab);
      break;
  
    case "printConversationData":
      let printConversationData_tab = await openTabNextToCurrent(`./log.html?func=printConversationData&id=${request[1]}`)
      console.log(printConversationData_tab);
      break;
      
    case "exportToCSV":
      tableToCSV();
      break;
    
    
    case "disco":
      let discoInteractions_tab = await openTabNextToCurrent('./log.html?func=disco')
      console.log(discoInteractions_tab);
      break;
      
    default:
      console.log("background is ignoring you");    
  }
}

async function getCalls(endpoint) {
  let response = await(getAPI(endpoint));
  console.log(response);
  return(response); 
  
}

// Close side panel
async function closeSidePanel(){
    
    await chrome.sidePanel.setOptions({
      tabId,
      enabled: false
    });

}



chrome.storage.session.setAccessLevel({ accessLevel: 'TRUSTED_AND_UNTRUSTED_CONTEXTS' });
