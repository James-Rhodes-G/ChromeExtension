
import * as utils from './utils.js';
import { promptDownload } from './exportTable.js';

//// get list of prompts
async function getPrompts(pageSize=99,pageNumber=1){
    const apiToCall = `/api/v2/architect/prompts?pageSize=${pageSize}&pageNumber=${pageNumber}&sortBy=name&sortOrder=asc`;
    const response = utils.getAPI(apiToCall);
    return response;
}


//// display list of prompts
async function logPromptOutput(table, data){
    data['entities'].forEach(function (prompt){
        utils.createRow(table, [prompt.name, prompt.description] )
    })
}

async function exportPromptsAndResources (table, prompts, columns){
	let newHeaders=['','','Resources','uploadStatus','ttsString', 'mediaUri'];
	prompts.entities.forEach(function (prompt){
		let newTable = utils.createGuxTable(prompt.name);
		table = newTable[1];
		document.getElementById('logOutput').appendChild(newTable[0]).appendChild(newTable[1]);
		// console.log(columns);
		utils.createHeader(table,columns);
		utils.createRow(table, [prompt.name, prompt.description])
		utils.createHeader(table, newHeaders);
		prompt.resources.forEach(function (resource){
			let body = []
			//console.log(prompt);
			newHeaders.forEach(function(header){
				if (header ===''){
					body.push('');
				}
				else if (header ==='Resources' ){
					body.push(resource.id);
				}else if (header ==='mediaUri') {
					if (resource[header]){
						body.push(`<a id="recording" className="${prompt.name}_${resource.id}" href="${resource[header]}" target="_blank"> Listen</a>`)
					} else{
						body.push('');
					};
				}else if (resource[header]){
					body.push(resource[header]);
				}else {
					body.push('N/A');
				};				
			})
			//console.log(body);
			utils.createRow(table, body);
		})	
	})
}


//// actual export prompts function
export async function exportPrompts(){
    var pageNumber=1
    var pageSize = 99
    //// get a list of user prompts
	//const table = utils.createGuxTable("prompt_export");
	//document.getElementById('logOutput').appendChild(table[0]).appendChild(table[1]);
    //utils.createHeader(table[1], ['promptName', 'promptDescription']);
    let columns=["name", "description"];
	utils.loadingMessage("Prompts");
    do{
        var resp = await getPrompts(pageSize,pageNumber);
        //await logPromptOutput(table, resp);
        await exportPromptsAndResources('', resp, columns);
        pageNumber ++
    } while (resp.selfUri != resp.lastUri);
	//// Add export button
	utils.loadingMessageClear("Prompts");
	const exportBtn  = document.getElementById("exportButton");
    exportBtn.style.display = 'block';
	const btn = document.createElement('gux-button');
	Object.assign(btn,{accent:'primary',id:'downloadPrompts',innerText:'Download Prompts'})
	btn.addEventListener('click', promptDownload );
	exportBtn.appendChild(btn);
	
}