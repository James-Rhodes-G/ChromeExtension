
//// Add listener for save button
var qbnBtns = document.getElementsByClassName("btn")
var b; 
for (b = 0; b < qbnBtns.length; b++) { 
    const objButton = new ButtonObjCreate(qbnBtns[b].id, qbnBtns[b].innerText, qbnBtns[b].name);
    qbnBtns[b].addEventListener("click", function(){
        setDataToStorage()
    });
}

// Add listener for page load
document.addEventListener('DOMContentLoaded', function() {
    getDataFromStorage();
    console.log('DOM is ready');
  });


//// Create Button Objects
function ButtonObjCreate (id='', text='', name=''){
    this.name = name;
    this.id = id;
    this.text = text;
}

async function getDataFromStorage(){
    // get data from local storage
    let newData = await chrome.storage.local.get(["quickNav", "analyticsOptions"]);
    if (newData.quickNav) {
        Object.keys(newData.quickNav).forEach( key => {
            let field = document.getElementsByName(key);
            if (!field.length) {
                return;
            }
            if(field[0].name.includes("radio")){
                field[0].checked = true
            } else{
                field[0].value = newData.quickNav[key]
            };
        })
    }

    const analyticsOptions = newData.analyticsOptions || {};
    const resultsCheckbox = document.getElementById('AutoDisableResultsSettings');
    if (resultsCheckbox) {
        resultsCheckbox.checked = !!analyticsOptions.autoDisableResultsSettings;
    }
}

async function setDataToStorage() {

    // Set formData to local storage
    let form = document.getElementById('QuickNavForm');
    if (form) {
        chrome.storage.local.set({"quickNav":Object.fromEntries(new FormData(form).entries())});
    }

    const resultsCheckbox = document.getElementById('AutoDisableResultsSettings');
    const analyticsOptions = {
        autoDisableResultsSettings: !!(resultsCheckbox && resultsCheckbox.checked)
    };
    chrome.storage.local.set({ "analyticsOptions": analyticsOptions });
    alert("Data Saved");
}
