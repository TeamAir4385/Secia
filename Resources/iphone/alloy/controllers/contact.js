function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function doOpen(e) {
        var actionBar = e.source.activity.actionBar;
        if (actionBar) {
            actionBar.displayHomeAsUp = true;
            actionBar.onHomeIconItemSelected = function() {
                e.source.close();
            };
            e.source.activity.invalidateOptionsMenu();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "contact";
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
    $.__views.contact = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "contact",
        title: "Contact Us"
    });
    $.__views.contact && $.addTopLevelView($.__views.contact);
    doOpen ? $.__views.contact.addEventListener("open", doOpen) : __defers["$.__views.contact!open!doOpen"] = true;
    $.__views.__alloyId1 = Ti.UI.createLabel({
        color: "#600",
        text: "Please feel free to contact us if you are interested or have any questions!",
        top: "15",
        center: "0",
        id: "__alloyId1"
    });
    $.__views.contact.add($.__views.__alloyId1);
    $.__views.textField1 = Ti.UI.createTextArea({
        id: "textField1",
        hintText: "First Name",
        top: "65",
        center: "0",
        width: "75%",
        height: "40"
    });
    $.__views.contact.add($.__views.textField1);
    $.__views.textField2 = Ti.UI.createTextArea({
        id: "textField2",
        hintText: "Last Name",
        top: "105",
        center: "0",
        width: "75%",
        height: "40"
    });
    $.__views.contact.add($.__views.textField2);
    $.__views.textField3 = Ti.UI.createTextArea({
        id: "textField3",
        hintText: "Emai Address",
        top: "145",
        center: "0",
        width: "75%",
        height: "40"
    });
    $.__views.contact.add($.__views.textField3);
    $.__views.textField4 = Ti.UI.createTextArea({
        id: "textField4",
        hintText: "Phone Number",
        top: "185",
        center: "0",
        width: "75%",
        height: "40"
    });
    $.__views.contact.add($.__views.textField4);
    $.__views.submit = Ti.UI.createButton({
        id: "submit",
        title: "Submit",
        bottom: "150"
    });
    $.__views.contact.add($.__views.submit);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.contact.open();
    __defers["$.__views.contact!open!doOpen"] && $.__views.contact.addEventListener("open", doOpen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;