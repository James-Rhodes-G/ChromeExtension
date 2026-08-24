import * as utils from './utils.js';


// **** REQUIRES A SCOPE infrastructureascode OR infrastructureascode:readonly ****
// **** DEVELOPMENT IS ON HOLD UNTIL A SCOPE CAN BE ASSIGNED TO A USER OR A    ****
// **** WAY TO SECURELY COLLECT AND STORE OAUTH INFORMATION CAN BE IMPLEMENTED ****


// Get Accelerators   
// Display Accellerators
//  Name, Description, Origin, Classification, Tags, install Button
//



async function getAccelerators(pageNumber=1){
    const apiToCall = `/api/v2/infrastructureascode/accelerators?pageNumber=${pageNumber}`;
    console.log(apiToCall);
    const response = await utils.getAPI(apiToCall);
    return (response);
}



export async function displayAccelerators(resp){
    const page = document.getElementById("logOutput");
    var table = document.querySelector('tBody');
    const authData  = await utils.getAuthInfo();
    //const region  = authData.region.replace('api','apps')
    if (table === null ) {
        var qh = document.getElementById('qHeader');
        if (qh === null){
            qh = document.createElement("p");
            Object.assign(qh, {id:'qHeader'});
            console.log(qh);
        }
        qh.innerText= flowName;
        page.appendChild(qh);
        var tableDiv = document.createElement("table");
        Object.assign(tableDiv,{id:`accelerators`});
        table = tableDiv.createTBody();
        utils.createHeader(table,['name','description', 'classification', 'tags']);
    };
    resp['entities'].forEach(accelerator => {
        utils.createRow(table, [
            accelerator.name, accelerator.description, accelerator.type, accelerator.classification,
                accelerator.tags]);
        });
    page.appendChild(tableDiv);
    if (resp.pagecount > resp.pageNumber){
        utils.showNextPageButton();
        var btn = document.getElementById('nextPage')
        btn.addEventListener('click',async function handleNextPage(){
            var table =  document.querySelector('table');
            if (table){
                table.remove();
            }
            getAccelerators(resp.pageNumber+1).then( (resp) => {
                console.log(resp);
                btn.removeEventListener('click',handleNextPage);
                displayAccelerators(resp);
            });
        });
    }
    return
}



export async function accelerators(urlParams){
    getAccelerators().then( (resp) => {
        displayAccelerators(resp);
    })
}