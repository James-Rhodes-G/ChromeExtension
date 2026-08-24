
export async function addDropZoneHtml(message){
   
    const fileUpload = document.createElement("div");
    Object.assign(fileUpload, {id:"fileUpload", className:"fileUpload"})
    const dz_div = document.createElement("div");
    Object.assign(dz_div, {id:"dropzone-area", className:"dropzone"})
    const dz_msg = document.createElement("div");
    Object.assign(dz_msg, {class:"dz-message"});
    dz_msg.innerHTML = `<span> ${message} </span>`;
    dz_div.appendChild(dz_msg);
    const dz_preview = document.createElement("div");
    Object.assign(dz_preview, {id:"jsonBox"});
    const btn_build = document.createElement("button");
    Object.assign(btn_build, {id:"build", className:"build", style:"display:none", innerText:"Build"})
    const btn_clear = document.createElement("button");
    Object.assign(btn_clear, {id:"clear", className:"clear", style:"display:none", innerText:"Clear"})
    fileUpload.appendChild(dz_div);
    fileUpload.appendChild(dz_preview);
    const footer = document.getElementsByClassName('FooterContainer');
    footer[0].appendChild(btn_build);
    footer[0].appendChild(btn_clear);
    return fileUpload;
}

export async function addSingleFileDropZone(){
    Dropzone.autoDiscover = false; // Disable auto discovery

    const myDropzone = new Dropzone(".dropzone", {
        url: "/upload", // Replace with your upload URL
        acceptedFiles: ".json", // Accept only JSON files
        maxFiles: 1, // Only allow one file
        addRemoveLinks: true, // Show remove file links
        autoProcessQueue: false,  // stop auto uploading

        init: function () {
            this.on("addedfile", function (file) {
                const reader = new FileReader();
                reader.onload = function (event) {
                    try {
                        const jsonData = JSON.parse(event.target.result);
                        displayJsonPreview(jsonData);
                        const btns = ['build', 'clear'];
                        btns.forEach((btn) => {
                            var thisBtn = document.getElementById(btn);
                            thisBtn.style.display="inline-block";
                            thisBtn.addEventListener("click", function(){
                                handleBtn(thisBtn)
                            });
                        });
                    } catch (error) {
                        console.error("Error parsing JSON:", error);
                        alert("Error parsing JSON. Please check the file.");
                        myDropzone.removeFile(file); // Remove the file
                    }
                };
                reader.readAsText(file);
            });
            this.on("removedfile", function () {
                clearJsonPreview();
            });
        },
        error: function (file, message) {
            alert("Error uploading file: " + message);
            this.removeFile(file);
        },
        success: function (file, response) {
            console.log("File uploaded successfully:", response);
        },
    });
}

function displayJsonPreview(jsonData) {
    const previewArea = document.getElementById("jsonBox");
    //previewArea.innerHTML += `<pre>${JSON.stringify(jsonData, null, 2)}</pre>`;
    jQuery(document).ready(function() {
        jQuery("#jsonBox").jsonViewer(jsonData, {withQuotes: true, rootCollapsable: true, collapsed:false});
    });
}

function clearJsonPreview() {
    document.getElementById("preview-area").innerHTML = "";
}

function handleBtn(btn){
    switch(btn.id) {
        case 'clear':
            location.reload();  //Force page to reload vs trying to remove the file and clear the preview
            break;
        case 'build':
            alert('once this is done we will build something here')
            console.log(btn);
            break;
        default:
            console.log(btn);
    }
}