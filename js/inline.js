

document.getElementById("export").addEventListener('click', function () {
  var module = import ('./exportTable.js').then( (module) => {
    module.tableToCSV();
  })
        
})

// Get the button:
console.log('button listener');
let floatButtons = document.querySelectorAll("#floatBtn");
floatButtons.forEach(button => {
  button.addEventListener('click', function (event) {
    if (event.target.className == 'top'){
      document.body.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }else {
      document.body.scrollTop = document.body.scrollHeight;
    }
    
  });
})


// When the user scrolls down 20px from the top of the document, show the button
console.log('scroll listener');
//window.onscroll = function() {scrollFunction()};
document.body.addEventListener('scroll', () => {scrollFunction()} )

function scrollFunction() {
  //console.log(document.body.scrollTop);
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    floatButtons.forEach(button => {
      button.style.display = "block";
    })
  } else {
    floatButtons.forEach(button => {
      button.style.display = "none";
    })
  }
}

  async function getUserInput() {
    return new Promise((resolve) => {
      var input = "CANCELED"
      input = prompt("Please enter something:");
      resolve(input);
    });
  }


  async function main() {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    const urlParams = new URL(tabs[0].url).searchParams
    console.log(urlParams.get('func'));
    switch(urlParams.get('func')) {
      case 'pwdreset':
        const userInput = await getUserInput();
        console.log("User input:", userInput);
        if (userInput == "CANCELED" || userInput == null || userInput == "") {
          const element = document.getElementById("logOutput");
          element.innerHTML += `<p>user canceled pwd input</p>`;
          exit;
        } else {
          console.log(`Pwd wil be set to ${userInput}`);
          var module = await import ('./passwordReset.js');
          module.runPwdReset(userInput);
        }
        break;  
      
      case 'userList':
        console.log('outputting users');
        var module = await import ('./passwordReset.js');
        module.exportUsers();
        return;
      
      case 'phoneList':
        console.log('Phone Export');
        var module = await import ('./phones.js');
        module.exportPhones();
        break;

      case 'queueList':
        console.log('queueList');
        var module = await import ('./queues.js');
        module.exportQueues();
        break;

      case 'bulkPhoneBuild':
          console.log('bulkPhoneBuild');
          var module = await import ('./phones.js');
        module.bulkBuildPhones();
          break;

      case 'bulkAssignAutoAnswer':
        console.log('Auto Answer');
        var module = await import ('./passwordReset.js');
        module.bulkAssignAutoAnswer();
        break;

      case 'bulkAssignRoles':
        console.log('bulkAssignRoles');
        var module = await import ('./roles.js');
        module.bulkAssignRoles();
        break;
      
      case 'bulkAssignSkills':
        console.log("bulk assign skills");
        var module = await import ('./skills.js');
        module.bulkAssignSkills();
        break;
        
      case 'exportAll':
        console.log('exportAll');
        var module = await import ('./bulkExport.js');
        module.exportAll();
        break;

      case 'queueMemberList':
        console.log('queueMemberList');
        var module = await import ('./queues.js');
        module.exportQueueUsers();
        break;

      case 'exportGroupUsers':
        console.log('exportGroupUsers');
        var module = await import ('./groups.js');
        module.exportGroupUsers();
        break;

      case 'createMasterAdmin':
        console.log('createMasterAdmin');
        var module = await import ('./roles.js');
        module.createMasterAdmin();
        break;

      case 'loadSchedules':
        console.log('loadSchedules');
        var module = await import ('./loadSchedules.js');
        module.loadSchedules();
        break;
      
      case 'exportRoles':
        console.log('exportRoles');
        var module = await import ('./roles.js');
        module.exportRoles();
        break;

      case 'exportSkills':
        console.log('exportSkills');
        var module = await import ('./skills.js');
        module.exportSkills();
        break;

      case 'exportPrompts':
        console.log('exportPrompts');
        var module = await import ('./prompts.js');
        module.exportPrompts();
        break;

      case 'exportGroups':
        console.log('exportGroups');
        var module = await import ('./groups.js');
        module.exportGroups();
        break;

      case 'disco':
        console.log("disco interactions");
        var module = await import ('./disconnect.js');
        module.disconnectInteractions();
        break;
      
      case 'userRoles':
        console.log("export user roles");
        var module = await import ('./users.js');
        module.exportUserRoles();
        break;

      case 'bulkSelectUserLogoff':
        console.log("bulk user logoff");
        var module = await import ('./users.js');
        module.bulkSelectUserLogoff();
        break;
      
      case 'userLogoff':
        console.log("user logoff");
        var module = await import ('./users.js');
        module.userLogoff();
        break;

      case 'printConversationData':
        console.log("printing conversation data");
        var module = await import ('./conversation.js');
        module.printConversationData(urlParams.get('id'));
        break;

      case 'utterances':
        console.log("printing utterances");
        var module = await import ('./utterance.js');
        module.utterances (urlParams);
        break;

      case 'intentHealth':
        console.log('intentHealth');
        var module = await import ('./utterance.js');
        module.intentHealth (urlParams);
        break;
      
      case 'dropTesting':
        console.log('dropTesting');
        var module = await import ('./dropTest.js');
        module.dropTest (urlParams);
        break;
      
      case 'flowExecution':
        console.log('flowExecution');
        var module = await import ('./flowExecution.js');
        module.flowExecution (urlParams);
        break;

      // SEE NOTES IN accelerator.js  
      // case 'accelerators':
      //   console.log(urlParams);
      //   accelerators(urlParams);
      //   break;

      default:
        console.log("no match");


    }

  }
 
//const inputElement = document.getElementById("plus");
//inputElement.addEventListener("focus", main()); 
//main();
window.addEventListener("focus", main()); 