import * as utils from "./utils.js"

export async function callSpoof(inputBoxes){
    
    const body = {};
    Object.assign(body,
        {"phoneNumber":`${inputBoxes.outDial.value}`,
        "callerId":`${inputBoxes.outClid.value}`,
        "callerIdName":`${inputBoxes.outCnam.value}`
        })
    
    const apiToCall='/api/v2/conversations/calls';
    utils.otherPostApi(apiToCall,body);

}