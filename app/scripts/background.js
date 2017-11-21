
chrome.browserAction.onClicked.addListener((tab) => {

  chrome.tabs.executeScript(tab.id, { file: '/scripts/scrape.js'}, _=>{
    if(chrome.runtime.lastError !== undefined){
      console.log(_, e);
    }
  })

})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request.dictionary)
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.executeScript(tabs[0].id, { file: '/scripts/editContentScript.js'}, _=>{
      if(chrome.runtime.lastError !== undefined){
        console.log(_, e);
      }
    })
  });
});