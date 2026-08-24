// //// Set Sidepanel options:
// chrome.sidePanel
//     .setPanelBehavior({ openPanelOnActionClick: true })
//     .catch((error) => console.error(error));

//     //// Add all Genesys Regions as usable Regions
//     const allowedPages=["https://apps.apne3.pure.cloud",
//         "https://apps.apne2.pure.cloud",
//         "https://apps.mypurecloud.com.au",
//         "https://apps.mypurecloud.jp",
//         "https://apps.cac1.pure.cloud",
//         "https://apps.mypurecloud.de",
//         "https://apps.mypurecloud.ie",
//         "https://apps.euw2.pure.cloud",
//         "https://apps.euc2.pure.cloud",
//         "https://apps.mec1.pure.cloud",
//         "https://apps.sae1.pure.cloud",
//         "https://apps.mypurecloud.com",
//         "https://apps.use2.us-gov-pure.cloud",
//         "https://apps.usw2.pure.cloud"];

// //// add change Listener for tabs
// chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
//         if (!tab.url) return;
//         const url = new URL(tab.url);
//         // Enables the side panel on google.com
//         if (allowedPages.includes(url.origin)) {
//           await chrome.sidePanel.setOptions({
//             tabId,
//             path: 'sidepanel.html',
//             enabled: true
//           });
//         } else {
//           // Disables the side panel on all other sites
//           await chrome.sidePanel.setOptions({
//             tabId,
//             enabled: false
//           });
//         }
//       });


    //// Extension Load Listener

document.addEventListener('DOMContentLoaded', async (tabId, info, tab) => {

    console.log("loading the dom listener");
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    const tabDetail = tabs[0];
    let webSite = (new URL(tabDetail.url).origin);
    if (allowedPages.includes(webSite)){
        console.log("it matches")
        await chrome.sidePanel.setOptions({
            tabId,
            path: 'sidepanel.html',
            enabled: true
          });

    }else{
        // Disables the side panel on all other sites
        await chrome.sidePanel.setOptions({
        tabId,
        enabled: false
            });
        window.close();
        throw new Error("This is not a Genesys Page");
    }
    try {
        // Get the current tab
        //const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
        //const tab = tabs[0]; 
        console.log(tab);
        // Execute script in the current tab
        const fromPageLocalStore = await chrome.scripting.executeScript({ target: { tabId: tab.id }, function: () => sessionStorage['gcui_auth'] });
        // Store the result  
        await chrome.storage.local.set({['pc_auth']:fromPageLocalStore[0].result});
        let region = (new URL(tab.url).origin).replace("apps","api");
        await chrome.storage.local.set({['region']: region});
        console.log(fromPageLocalStore[0].result);
        console.log(tab.url)
        const tokenElement = document.getElementById('token');
        const regionElement = document.getElementById('region');
        const token = fromPageLocalStore[0].result;
        regionElement.textContent = region;
        tokenElement.textContent = token;
        let orgInfo = getOrgInfo();
        console.log(`this is the orgInfo ${orgInfo}`);
        await chrome.storage.local.set({['orgName']: orgInfo.thirdPartyOrgName});
        const getPwdReset = document.getElementById('pwdReset');
        if (getPwdReset) {
            getPwdReset.addEventListener('click', async () => {
                await chrome.runtime.sendMessage(['passwordReset'], (response) =>{
                    console.log(response);    
                    });
            });
        };
        const getUserList = document.getElementById('userList');
        if (getUserList) {
            getUserList.addEventListener('click', async () => {
                await chrome.runtime.sendMessage(['userList'], (response) =>{
                    console.log(response);    
                    });
            });
        };
        const getPhoneList = document.getElementById('phoneList');
        if (getPhoneList) {
            getPhoneList.addEventListener('click', async () => {
                await chrome.runtime.sendMessage(['phoneList'], (response) =>{
                    console.log(response);    
                    });
            });
        };
        const bulkPhoneBuild = document.getElementById('bulkPhoneBuild');    
        if (bulkPhoneBuild) {
            bulkPhoneBuild.addEventListener('click', async () => {
                await chrome.runtime.sendMessage(['bulkPhoneBuild'], (response) =>{
                    console.log(response);    
                    });
            });
        };
        const createMasterAdmin = document.getElementById('masterAdmin');    
        if (createMasterAdmin) {
            createMasterAdmin.addEventListener('click', async () => {
                await chrome.runtime.sendMessage(['masterAdmin'], (response) =>{
                    console.log(response);    
                    });
            });
        };
    } 
    catch(err) {
        console.log("nope, took the error path");
        console.log(err);
        // Log exceptions
    }


});

async function getOrgInfo() {
    //Send message to background worker to reterive ORG infor to update
    // extension showing which customer we are working with.
    const orgNameElement = document.getElementById('OrgName');
    const orgIdElement = document.getElementById('OrgId');
    let response = await chrome.runtime.sendMessage(['orgMe']);
    orgNameElement.textContent = response.name;
    orgIdElement.textContent = response.id;
    console.log(`this is the orgInfo ${response}`);
    await chrome.storage.local.set({['orgName']: response.thirdPartyOrgName});        
    return response;
    
};



