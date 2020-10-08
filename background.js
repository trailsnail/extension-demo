browser.contextMenus.create({
    id: "compare-image",
    title: "Compare Image"
});

function messageTab(tabs) {
    browser.tabs.sendMessage(tabs[0].id, {
        replacement: "Message from the extension!"
    });
}

function onExecuted(result) {
    var querying = browser.tabs.query({
        active: true,
        currentWindow: true
    });
    querying.then(messageTab);
}

browser.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "compare-image") {
        let executing = browser.tabs.executeScript({
            file: "compare-image.js"
        });
        executing.then(onExecuted);
    }
});