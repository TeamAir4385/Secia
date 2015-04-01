var args = arguments[0] || {}; //loads whatever from index.js. We technically don't need this here.'

/* Adds the options wrench in Android and is supposed to add options menu for iOS
 * Works for Android but haven't tested on iOS
 */
function clickedSettings(e) {
	var settingsController = Alloy.createController('settings');
	var win = settingsController.getView();

	if (Alloy.Globals.navgroup) {
		Alloy.Globals.navgroup.openWindow(win);
	} else if (OS_ANDROID) {
		win.open();
	}
}

//Main page buttons, likened to the WT app

// cob button
//opens the WT CoB page. Correct me if this is the wrong site.
$.cobButton.addEventListener('click', function(e)
{
	Ti.Platform.openURL("http://www.wtamu.edu/academics/college-business.aspx");
}); 

// calendar button
//not functional yet
$.calendarButton.addEventListener('click', function(e)
{
	if(OS_IOS){
		Titanium.Platform.openURL('CALSHOW://');//show calendar
	} else {
		    if (Titanium.Platform.osname=="android"){

	        //Params needed to create the android intent.
	        var packageStr = "com.google.android.calendar";
	        var classStr = "com.android.calendar.LaunchActivity";
	        var actionStr = Ti.Android.ACTION_VIEW;
	
	        var model = Ti.Platform.model;
	
	
	        if ((model.indexOf("HTC") != -1) || (model.indexOf("htc") != -1)){
	            //If it's a HTC device
	            packageStr = "com.htc.calendar";
	            classStr = "com.htc.calendar.MonthActivity";
	            actionStr = Ti.Android.ACTION_MAIN;
	        }
	        else {
	            //For android versions before Gingerbread (2.3)
	            var version = parseFloat(Ti.Platform.version);
	            if (version < 2.4) packageStr = "com.android.calendar";
	        }
	
	        //Launch native calendar
	        var intent = Ti.Android.createIntent({
	            action: actionStr,
	            packageName: packageStr,
	            className: classStr
	        });
	        Ti.Android.currentActivity.startActivity(intent);
	    }
	}
});

// contact us button
function contactUs(e) {
	Alloy.createController('contact').getView();
}
 //---------------------------------------------------
 
 // facebook button
$.facebookButton.addEventListener('click', function(e)
{
	Ti.Platform.openURL("http://www.facebook.com/WTAMUCOB");
	
	/*var strUrl = "http://www.facebook.com/WTAMUCOB";
	if (OS_IOS) {
	    strUrl = "http://www.facebook.com/WTAMUCOB";
	    if (Titanium.Platform.canOpenURL(strUrl)) {
	        Ti.Platform.openURL(strUrl);
	    } else {
	        strUrl = "http://www.facebook.com/WTAMUCOB";
	        Ti.Platform.openURL(strUrl);
	    }
	} else {
	
	    var result = Ti.Platform.openURL(strUrl);
	    Ti.API.info('RESULT = ' + result);
	}  */
});

// youtube button
$.youtubeButton.addEventListener('click', function(e)
{
	Ti.Platform.openURL("https://www.youtube.com/channel/UCENCoEEcsLJvyWaMjonwFuQ");
});

//---------------------------------------------------

// open window
$.home.open();