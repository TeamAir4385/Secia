function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function clickedSettings() {
        var settingsController = Alloy.createController("settings");
        var win = settingsController.getView();
        Alloy.Globals.navgroup && Alloy.Globals.navgroup.openWindow(win);
    }
    function contactUs() {
        Alloy.createController("contact").getView();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.home = Ti.UI.createWindow({
        backgroundColor: "#222222",
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
    $.__views.settingsButton = Ti.UI.createButton({
        width: 65,
        height: 65,
        id: "settingsButton",
        systemButton: Titanium.UI.iPhone.SystemButton.COMPOSE
    });
    clickedSettings ? $.__views.settingsButton.addEventListener("click", clickedSettings) : __defers["$.__views.settingsButton!click!clickedSettings"] = true;
    $.__views.home.rightNavButton = $.__views.settingsButton;
    $.__views.go = Ti.UI.createImageView({
        top: "15%",
        id: "go",
        image: "/images/goteam.png"
    });
    $.__views.home.add($.__views.go);
    $.__views.cobButton = Ti.UI.createButton({
        width: 65,
        height: 65,
        top: "50%",
        left: "10%",
        backgroundImage: "/images/browser.png",
        id: "cobButton"
    });
    $.__views.home.add($.__views.cobButton);
    $.__views.calendarButton = Ti.UI.createButton({
        width: 65,
        height: 65,
        top: "50%",
        backgroundImage: "/images/calendar.png",
        id: "calendarButton"
    });
    $.__views.home.add($.__views.calendarButton);
    $.__views.contactButton = Ti.UI.createButton({
        width: 65,
        height: 65,
        top: "50%",
        right: "10%",
        backgroundImage: "/images/contact.png",
        id: "contactButton"
    });
    $.__views.home.add($.__views.contactButton);
    contactUs ? $.__views.contactButton.addEventListener("click", contactUs) : __defers["$.__views.contactButton!click!contactUs"] = true;
    $.__views.facebookButton = Ti.UI.createButton({
        width: 65,
        height: 65,
        top: "75%",
        left: "25%",
        backgroundImage: "/images/facebook.png",
        id: "facebookButton"
    });
    $.__views.home.add($.__views.facebookButton);
    $.__views.youtubeButton = Ti.UI.createButton({
        width: 65,
        height: 65,
        top: "75%",
        right: "25%",
        backgroundImage: "/images/youtube.png",
        id: "youtubeButton"
    });
    $.__views.home.add($.__views.youtubeButton);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.cobButton.addEventListener("click", function() {
        Ti.Platform.openURL("http://www.wtamu.edu/academics/college-business.aspx");
    });
    $.calendarButton.addEventListener("click", function() {
        Titanium.Platform.openURL("CALSHOW://");
    });
    $.facebookButton.addEventListener("click", function() {
        Ti.Platform.openURL("http://www.facebook.com/WTAMUCOB");
    });
    $.youtubeButton.addEventListener("click", function() {
        Ti.Platform.openURL("https://www.youtube.com/channel/UCENCoEEcsLJvyWaMjonwFuQ");
    });
    $.home.open();
    __defers["$.__views.settingsButton!click!clickedSettings"] && $.__views.settingsButton.addEventListener("click", clickedSettings);
    __defers["$.__views.contactButton!click!contactUs"] && $.__views.contactButton.addEventListener("click", contactUs);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;