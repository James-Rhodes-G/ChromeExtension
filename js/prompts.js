import { getAPI, sendLogMessage, postAPI, otherPostApi, createHeader, createRow} from "./utils.js";

//// get list of prompts
async function getPrompts(pageSize=99,pageNumber=1){
    const apiToCall = `/api/v2/architect/prompts?pageSize=${pageSize}&pageNumber=${pageNumber}&sortBy=name&sortOrder=asc`;
    const response = getAPI(apiToCall);
    return response;
}


//// display list of prompts
async function logPromptOutput(table, data){
    data['entities'].forEach(function (prompt){
        createRow(table, [prompt.name, prompt.description] )
    })
}

async function exportPromptsAndResources (table, prompts, columns){
	let newHeaders=['Resources','id','uploadStatus','ttsString'];
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
				if (header ==='Resources' || !resource[header]){
					td.innerText = prompt.name;
				}else{
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
    createHeader(table, ['promptName', 'promptDescription']);
    let columns=["name", "description"]
    do{
        var resp = await getPrompts(pageSize,pageNumber);
        //await logPromptOutput(table, resp);
        await exportPromptsAndResources(table, resp, columns);
        pageNumber ++
    } while (resp.selfUri != resp.lastUri)
	//// Add export button
	const exportBtn  = document.getElementById("exportButton")
    exportBtn.style.display = 'block';
}