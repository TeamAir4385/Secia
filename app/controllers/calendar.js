var args = arguments[0] || {};

function showCalendars(calendars) {
    for (var i = 0; i < calendars.length; i++) {
        Ti.API.info(calendars[i].name);
    }
}
//found in acs documentation
Ti.API.info('ALL CALENDARS:');
showCalendars(Ti.Calendar.allCalendars);
if (Ti.Platform.osname === 'android') {
    Ti.API.info('SELECTABLE CALENDARS:');
    showCalendars(Ti.Calendar.selectableCalendars);
}

var CALENDAR_TO_USE = 3;
var calendar = Ti.Calendar.getCalendarById(CALENDAR_TO_USE);

// Create the event
var eventBegins = new Date(2010, 11, 26, 12, 0, 0);
var eventEnds = new Date(2010, 11, 26, 14, 0, 0);
var details = {
    title: 'Do some stuff',
    description: "I'm going to do some stuff at this time.",
    begin: eventBegins,
    end: eventEnds
};

var event = calendar.createEvent(details);

// Now add a reminder via e-mail for 10 minutes before the event.
var reminderDetails = {
    minutes: 10,
    method: Ti.Calendar.METHOD_EMAIL
};

event.createReminder(reminderDetails);

//opens window
$.calendar.open();