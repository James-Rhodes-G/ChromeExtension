chrome.runtime.onMessage.addListener((request, sender, sendResponse) =>{
    testRequest(request).then(sendResponse);
    return true;
  });

  export async function testRequest(request) {
    const element = document.getElementById("myElement");
    console.log(request[0]);
    switch(request[0]) {
    case "updateLog":
        element.innerHTML += `<p>${request[1]}</p>`;
        return "updated";
  
    case "errorLog":
        element.innerHTML += `<p style="color:red; font-weight:bold">${request[1]}</p>`;
        return "updated";
  
      default:
        console.log("logging is ignoring you");
      
    }
  }


console.log("log.js loaded");

