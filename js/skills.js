import { getAPI, sendLogMessage, postAPI, otherPostApi, createHeader, createRow} from "./utils.js";

//// get list of skills
async function getSkills(pageSize=99,pageNumber=1){
    const apiToCall = `/api/v2/routing/skills?pageSize=${pageSize}&pageNumber=${pageNumber}&sortBy=name&sortOrder=asc`;
    const response = getAPI(apiToCall);
    return response;
}


//// display list of skills
async function logSkillOutput(table, data){
    data['entities'].forEach(function (skill){
        createRow(table, [skill.name, skill.id, skill.state] )
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
    createHeader(table, ['skillName', 'skillId','skillState']);
    do{
        var resp = await getSkills(pageSize,pageNumber);
        await logSkillOutput(table, resp);
        pageNumber ++
    } while (resp.selfUri != resp.lastUri)
    //// add export button    
    const exportBtn  = document.getElementById("exportButton")
    exportBtn.style.display = 'block';
}