var args = arguments[0] || {};

function doOpen(e){
	var actionBar = e.source.activity.actionBar;

	//up window
	//http://docs.appcelerator.com/titanium/latest/#!/guide/Android_Action_Bar-section-36735509_AndroidActionBar-OtherActionBarFeatures

	if (actionBar) {
		actionBar.displayHomeAsUp = true;
		actionBar.onHomeIconItemSelected = function() {
			e.source.close();
		};

		e.source.activity.invalidateOptionsMenu();
	}	
}

$.contact.open();
