async function run() {
    
}
document.addEventListener('DOMContentLoaded', function() {

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length === 0) {
            console.error('No active tab found.');
            return;
            }

        console.log("Page Loaded");
        let token = localStorage.pc_auth;
        let region = window.location.hostname;

        const tokenElement = document.getElementById('token');
        const regionElement = document.getElementById('region');
        regionElement.textContent = region;
        tokenElement.textContent = token;
    });
console.log('Token: '+token+", Region: "+region);
console.log('This is localStorage:', localStorageItems);
console.log('This is from content:', content_localStorageItems)
});
}