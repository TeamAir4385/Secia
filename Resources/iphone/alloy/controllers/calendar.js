function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function showCalendars(calendars) {
        for (var i = 0; i < calendars.length; i++) Ti.API.info(calendars[i].name);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "calendar";
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
    $.__views.calendar = Ti.UI.createView({
        id: "calendar"
    });
    $.__views.calendar && $.addTopLevelView($.__views.calendar);
    $.__views.calendar = Ti.UI.createWindow({
        id: "calendar"
    });
    $.__views.calendar.add($.__views.calendar);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        text: "Calendar",
        id: "__alloyId0"
    });
    $.__views.calendar.add($.__views.__alloyId0);
    open ? $.__views.__alloyId0.addEventListener("click", open) : __defers["$.__views.__alloyId0!click!open"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    Ti.API.info("ALL CALENDARS:");
    showCalendars(Ti.Calendar.allCalendars);
    if ("android" === Ti.Platform.osname) {
        Ti.API.info("SELECTABLE CALENDARS:");
        showCalendars(Ti.Calendar.selectableCalendars);
    }
    var CALENDAR_TO_USE = 3;
    var calendar = Ti.Calendar.getCalendarById(CALENDAR_TO_USE);
    var eventBegins = new Date(2010, 11, 26, 12, 0, 0);
    var eventEnds = new Date(2010, 11, 26, 14, 0, 0);
    var details = {
        title: "Do some stuff",
        description: "I'm going to do some stuff at this time.",
        begin: eventBegins,
        end: eventEnds
    };
    var event = calendar.createEvent(details);
    var reminderDetails = {
        minutes: 10,
        method: Ti.Calendar.METHOD_EMAIL
    };
    event.createReminder(reminderDetails);
    $.calendar.open();
    __defers["$.__views.__alloyId0!click!open"] && $.__views.__alloyId0.addEventListener("click", open);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;