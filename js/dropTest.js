import * as utils from './utils.js';
import * as dz from './dropZone.js';


export async function dropTest(){

    var page = document.getElementById('logOutput');
    utils.createDivisionDropdown(page).then(()=>{
        return dz.addDropZoneHtml('Please Drop File Here') })
    .then ((dzHtml) => {
        return page.appendChild(dzHtml);})
    .then (() =>{
       return dz.addSingleFileDropZone(); 
    })
}