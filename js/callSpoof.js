import * as utils from "./utils.js"

export async function callSpoof(data){
    const inputBoxes = {};
    data.forEach(box => {
        inputBoxes[box.id]=box.value;
    });
    const body = {};
    Object.assign(body,
        {"phoneNumber":`${inputBoxes.outDial}`,
        "callerId":`${inputBoxes.outClid}`,
        "callerIdName":`${inputBoxes.outCnam}`
        })
    console.log(body);
    const apiToCall='/api/v2/conversations/calls';
    utils.otherPostApi(apiToCall,body);

}