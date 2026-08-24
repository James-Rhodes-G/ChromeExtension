
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method == "header") {
      newHeader = request.key
      console.log("This is the key:" + newHeader.initiator);
      token = JSON.parse(newHeader.requestHeaders[1])
      console.log("This is the token:" + token)
    sendResponse("this is the response");
  } else {
    sendResponse({}); // snub them.
  }
});

console.log('content.js has loaded');




