
import * as utils from './utils.js';


function buildCSVFromRows(rows) {
    let csv_data = [];
    for (let i = 0; i < rows.length; i++) {
        let cols = rows[i].querySelectorAll('td,th');
        let csvrow = [];
        for (let j = 0; j < cols.length; j++) {
            if(cols[j].innerHTML.includes("<a")){
                var columnData = cols[j].innerText;
            } else {
                var columnData = cols[j].innerHTML
            };
            columnData = columnData.replaceAll(",","");
            columnData = columnData.replaceAll('"','');
            columnData = columnData.replaceAll('<br>','|',)
            csvrow.push(columnData);
        }
        csv_data.push(csvrow.join(","));
    }
    return csv_data.join('\n');
}

export function buildCSVFromTable(table) {
    return buildCSVFromRows(table.getElementsByTagName('tr'));
}

function buildCSVFromDocument() {
    return buildCSVFromRows(document.getElementsByTagName('tr'));
}

async function getExportFileName(table){
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    var process;
    if (table?.id){
        process = table.id;
    } else {
        const urlParams = new URL(tabs[0].url).searchParams
        process = urlParams.get('func');
    }
    const data = await utils.getAuthInfo();
    return `${data.orgName}_${process}.csv`;
}

function getUniqueZipFileName(zip, fileName) {
    if (!zip.file(fileName)) {
        return fileName;
    }
    const dot = fileName.lastIndexOf('.');
    const base = dot >= 0 ? fileName.slice(0, dot) : fileName;
    const ext = dot >= 0 ? fileName.slice(dot) : '';
    let counter = 2;
    let candidate = `${base}_${counter}${ext}`;
    while (zip.file(candidate)) {
        counter++;
        candidate = `${base}_${counter}${ext}`;
    }
    return candidate;
}

export async function collectTablesInZip(zip, root = document.getElementById('logOutput')) {
    const tables = root ? root.querySelectorAll('table') : document.querySelectorAll('table');
    for (const table of tables) {
        const csv_data = buildCSVFromTable(table);
        const fileName = await getExportFileName(table);
        zip.file(getUniqueZipFileName(zip, fileName), csv_data);
    }
}

export async function downloadZipArchive(zip, archiveLabel = 'exportAll') {
    const authData = await utils.getAuthInfo();
    const zipData = await zip.generateAsync({
        type: "blob",
        streamFiles: true
    });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(zipData);
    link.download = `${authData.orgName}_${archiveLabel}.zip`;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export async function tableToCSV() {
    const csv_data = buildCSVFromDocument();
    await downloadCSVFile(csv_data);
}

async function generateFileName(){
    const table = document.querySelector('table');
    return getExportFileName(table);
}

async function downloadCSVFile(csv_data) {

    // Create CSV file object and feed
    // our csv_data into it
    const CSVFile = new Blob([csv_data], {
        type: "text/csv"
    });

    // Create to temporary link to initiate
    // download process
    let temp_link = document.createElement('a');
    
    // Get details for the file name
    const fileName = await generateFileName();
    console.log(`this is file exported: ${fileName}`);

    // Download csv file
    temp_link.download = fileName;
    let url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;

    // This link should not be displayed
    temp_link.style.display = "none";
    document.body.appendChild(temp_link);

    // Automatically click the link to
    // trigger download
    temp_link.click();
    document.body.removeChild(temp_link);
}


async function GenerateZipDownload(prompts) {
    const zip = new JSZip();
    await Promise.all(Object.entries(prompts).map(async (prompt) =>{
        const file = await fetch(prompt[1].href).then(r => r.blob());
        zip.file(`${prompt[1].attributes.classname.value}.wav`, file); // adds the file to the zip file
    }))
    const zipData =  await zip.generateAsync({
        type:"blob",
        streamFiles: true
    })
         return zipData;
}
    
async function DowloadZipFile(zipData, custData){
    const link = document.createElement('a');
      link.href = window.URL.createObjectURL(zipData);
      link.download = `${custData[0]}_${custData[1]}.zip`;
      link.click();
}

async function getExportFileNameParts(table){
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    var process;
    if (table?.id){
        process = table.id;
    } else {
        const urlParams = new URL(tabs[0].url).searchParams
        process = urlParams.get('func');
    }
    const data = await utils.getAuthInfo();
    return [ data.orgName, process];
}

export async function promptDownload(){
    const prompts = document.querySelectorAll("#recording");
    const custData = await getExportFileNameParts(document.querySelector('table'));
    const element = document.getElementById("logOutput");
    element.innerHTML = '';
    const footer = document.getElementsByClassName('FooterContainer');
    footer[0].style.display='none';
    utils.loadingMessage('downloading prompts');
    const currentZipFile = await GenerateZipDownload(prompts);
    console.log(currentZipFile);
    utils.loadingMessageClear('downloading prompts');
    element.innerHTML='<h2>Download Complete</h2>';

    DowloadZipFile(currentZipFile, custData);
}