
import * as utils from './utils.js';

export async function tableToCSV() {

    // Variable to store the final csv data
    let csv_data = [];

    // Get each row data
    let rows = document.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {

        // Get each column data
        let cols = rows[i].querySelectorAll('td,th');

        // Stores each csv row data
        let csvrow = [];
        for (let j = 0; j < cols.length; j++) {

            // Get the text data of each cell
            // of a row and push it to csvrow
            let columnData = (cols[j].innerHTML).replaceAll(",","");
            columnData = (columnData).replaceAll('"','');
            csvrow.push(columnData.replaceAll('<br>','|',));
        }

        // Combine each column value with comma
        csv_data.push(csvrow.join(","));
    }

    // Combine each row data with new line character
    csv_data = csv_data.join('\n');

    // Call this function to download csv file  
    downloadCSVFile(csv_data);

}

async function generateFileName(){
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    var table = document.querySelector('table')
    if (table.id){
        console.log('tableid');
        var process = table.id;
    } else {
        const urlParams = new URL(tabs[0].url).searchParams
        var process = urlParams.get('func');
        console.log(process)        
    }
    const data = await utils.getAuthInfo();
    return [ data.orgName, process]

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
    const fileData = await generateFileName();
    console.log(`this is file exported: ${fileData}`);

    // Download csv file
    temp_link.download = `${fileData[0]}_${fileData[1]}.csv`;
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