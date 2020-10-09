browser.contextMenus.create({
    id: "fetch-iframe",
    title: "Fetch iFrame"
});

browser.contextMenus.create({
    id: "get-urls",
    title: "Get Urls"
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "fetch-iframe") {
        browser.tabs.executeScript({
            file: "fetch-iframe.js"
        });
    }

    if (info.menuItemId == "get-urls") {
        browser.tabs.executeScript({
            file: "fetch-iframe.js"
        });
    }
});