console.log("Background script running");

browser.menus.create({
    id: "muted-tab",
    title: "Open in new Muted Tab",
    contexts: ["link"]
});