/* This might need some work. The goal is to tell index to load the actionbar 
 * for Android and load the normal stuff for iOS if that is the platform.
 * Help here would be appreciated. I think this is where it is having an 
 * issue loading for iOS.
 */

if (OS_IOS) {
	Alloy.Globals.navgroup = $.index;
}

if (OS_ANDROID) {
	$.home.getView().open();
} else {
	$.index.open();
}

//code runs on Android without this. 