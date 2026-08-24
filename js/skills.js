
import * as utils from './utils.js';
import { userSelectLoop } from "./passwordReset.js";
import { getUsers } from "./users.js";

//// get list of skills
async function getSkills(pageSize=99,pageNumber=1){
    const apiToCall = `/api/v2/routing/skills?pageSize=${pageSize}&pageNumber=${pageNumber}&sortBy=name&sortOrder=asc`;
    const response = utils.getAPI(apiToCall);
    return response;
}


//// display list of skills
async function logSkillOutput(table, data){
    data['entities'].forEach(function (skill){
        utils.createRow(table, [skill.name, skill.id, skill.state] )
    })
}


//// actual export skills function
export async function exportSkills(){
    var pageNumber=1
    var pageSize = 99
    //// get a list of user roles
    const table = document.createElement('table');
    Object.assign(table, {id:"skill_export"});
    document.getElementById('logOutput').appendChild(table);
    utils.createHeader(table, ['skillName', 'skillId','skillState']);
    do{
        var resp = await getSkills(pageSize,pageNumber);
        await logSkillOutput(table, resp);
        pageNumber ++
    } while (resp.selfUri != resp.lastUri)
    //// add export button    
    const exportBtn  = document.getElementById("exportButton")
    exportBtn.style.display = 'block';
}

//// Bulk Assignment of Skills
export async function bulkAssignSkills() {
    //// create the structure of the page
    utils.createBulkSelectBody('Skills Avaialble','Skills Selected' );
    //// set proficiency
    var dropBoxOptions=[{value:1,text:1},{value:2,text:2},
        {value:3,text:3},{value:4,text:4},{value:5,text:5}];
    //// get all skills and populate the page
    let pageNumber=1
    let pageSize = 99
    do{
        var resp = await getSkills(pageSize,pageNumber);
        resp.entities = await utils.alphaSortByName(resp.entities);
        resp.entities.forEach( async function (skill) {
            utils.createBulkItemSelector(skill.name, skill.id, dropBoxOptions);
        })
        pageNumber ++
    } while (resp.selfUri != resp.lastUri);
    //// add listener to move items between boxes
    utils.addListenerToSelectItems();
    
    //// Add listener for user click a button
   const selectedSkills = new Promise((resolve) => {
    document.getElementById('selectButton').addEventListener('click', () => {
        resolve(utils.getSelectedRoles());
        });
    });


    //// wait for the user to click the button 
    const skillsAndProf = await selectedSkills;
    
    //// collect all roles and divisions from the right side
    console.log('returned information: ',skillsAndProf);
    
    //// Clear the page so we can select users
    let element = document.getElementById('logOutput');
    element.innerHTML = ''; /// Clear the page

    //// get users for selection
    pageNumber=1
    pageSize = 99
    do{
        const resp = await getUsers(pageSize,pageNumber);
        await userSelectLoop(resp);
        pageNumber++
    }while (resp.selfUri != resp.lastUri);

    ////  Event Listener for Select All Checkbox
    utils.makeSelectAllListener();

    //// Make rows clickable
    utils.makeTableRowsClickable();

    const btnUsers = document.getElementById('selectButton');
    //// Add listener for user click a button
    const eventPromise = new Promise((resolve) => {
        btnUsers.addEventListener('click', () => {
            if (document.querySelectorAll('input[type="checkbox"]:checked')){
                    resolve(); 
                };
            });
        });

    //// Wait for user
    await eventPromise;
    //// collect selected users
    var users = document.querySelectorAll('input[type="checkbox"]:checked');
    element.innerHTML = ''; /// Clear the page
    var table = document.createElement("table");
    element.appendChild(table);
    //// provide export button
    const exportBtn  = document.getElementById("exportButton")
    exportBtn.style.display = 'block';
    //// hide done button
    btnUsers.style.display = 'none';
    Object.assign(table, {id:"bulk_user_skill_assign"});
    utils.createHeader(table, ['userName', 'skill', 'proficiency', 'status']);
    ////create body for Skill assignment
    let skillBody = [];
    skillsAndProf.forEach(skill => {
        skillBody.push(Object.assign({}, {id:skill.itemId, proficiency:skill.dropId}));
        })
    //// cycle through users updating skills 
    users.forEach(  async function(entry) {
        let apiToCall = `/api/v2/users/${entry.defaultValue}/routingskills/bulk`;
        const response = await utils.patchAPI(apiToCall, skillBody);
        if (response.ok){
            skillsAndProf.forEach(skill => {
                utils.createRow(table, [ entry.parentNode.parentElement.cells[1].innerText,
                        skill.itemName, skill.dropId, 'success']);
            })
        }else{
            skillsAndProf.forEach(skill => {
                utils.createRow(table, [ entry.parentNode.parentElement.cells[1].innerText,
                    skill.itemName, skill.dropId, response.message]);
            })
        };
    })
}