chrome.runtime.onInstalled.addListener(() => {
  console.log("RouteWise Extension Installed");

  chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: openPopup,
    });
  });
});

function openPopup() {
  chrome.windows.create({
    url: 'index.html',
    type: 'popup',
    width: 400,
    height: 600
  });
}
