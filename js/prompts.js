
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
	let newHeaders=['Resources','id','uploadStatus','ttsString', 'mediaUri'];
	prompts.entities.forEach(function (prompt){
		let r = table.insertRow();
        r.setAttribute('id','promptName');
		columns.forEach(function (column){
			let td = document.createElement('td');
			td.innerText=prompt[column];
			r.appendChild(td);
		})
		table.appendChild(r);
		r = table.insertRow();
        r.setAttribute('id','resource')
		newHeaders.forEach(function (header){
			let th = document.createElement('th');
			th.innerText = header ;
			r.appendChild(th);
		})
		table.appendChild(r);
		prompt.resources.forEach(function (resource){
			r = table.insertRow();
			newHeaders.forEach(function(header){
				let td = document.createElement('td');
				if (header ==='Resources' ){
					td.innerText = prompt.name;
				}else if (header ==='mediaUri') {
					if (resource[header]){
						td.innerHTML = `<a id="recording" className="${prompt.name}_${resource.id}" href="${resource[header]}" target="_blank"> Listen</a>`
					} else{
						td.innerText='';
					};
				}else if (resource[header]){
					td.innerText = resource[header];
				};
				r.appendChild(td);
			})
			table.appendChild(r);
		})	
	})
}


//// actual export prompts function
export async function exportPrompts(){
    var pageNumber=1
    var pageSize = 99
    //// get a list of user roles
    const table = document.createElement('table');
    Object.assign(table, {id:"prompt_export"});
    document.getElementById('logOutput').appendChild(table);
    utils.createHeader(table, ['promptName', 'promptDescription']);
    let columns=["name", "description"];
	utils.loadingMessage("Prompts");
    do{
        var resp = await getPrompts(pageSize,pageNumber);
        //await logPromptOutput(table, resp);
        await exportPromptsAndResources(table, resp, columns);
        pageNumber ++
    } while (resp.selfUri != resp.lastUri);
	//// Add export button
	utils.loadingMessageClear("Prompts");
	const exportBtn  = document.getElementById("exportButton");
    exportBtn.style.display = 'block';
	const btn = document.createElement('button');
	btn.id='downloadPrompts';
	btn.innerText='Download Prompts';
	btn.addEventListener('click', promptDownload );
	exportBtn.appendChild(btn);
	
}