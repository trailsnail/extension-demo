browser.contextMenus.create({
    id: "fetch-iframe",
    title: "Fetch iFrame"
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "fetch-iframe") {
        browser.tabs.executeScript({
            file: "fetch-iframe.js"
        });
    }
});