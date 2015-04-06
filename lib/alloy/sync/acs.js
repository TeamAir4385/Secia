
/*
 * Sync adapters are required such that the models can connect to a
 * persistence strategy of your choosing.
 */

function S4() {
	return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
}

function guid() {
	return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
}

function InitAdapter(config) {
	Cloud = require("ti.cloud");
	Cloud.debug = !0;
	config.Cloud = Cloud;
}

function Sync(method, model, options) {
	var object_name = model.config.adapter.collection_name;

	//determine which sync method to call based on the
	//collection type in the model
	if (object_name === "events") {
		processACSEvents(model, method, options);
	}else
	{
				Ti.API.error("Events.create " + e.message);
				options.error(e.error && e.message || e);
	}
}

/**
 * this is a separate handler for when the object being processed
 * is an ACS Events
 */
function processACSEvents(model, method, options) {
	switch (method) {
	case "create":
		// include attributes into the params for ACS
		Cloud.Photos.create(model.toJSON(), function(e) {
			if (e.success) {

				// save the meta data with object
				model.meta = e.meta;

				// return the individual photo object found
				options.success(e.events[0]);

				// trigger fetch for UI updates
				model.trigger("fetch");
			} else {
				Ti.API.error("Events.create " + e.message);
				options.error(e.error && e.message || e);
			}
		});
		break;
	case "read":
		model.id && (options.data.event_id = model.id);

		var method = model.id ? Cloud.Events.show : Cloud.Events.query;

		method((options.data || {}), function(e) {
			if (e.success) {
				model.meta = e.meta;
				if (e.events.length === 1) {
					options.success(e.events[0]);
				} else {
					options.success(e.events);
				}
				model.trigger("fetch");
				return;
			} else {
				Ti.API.error("Cloud.Events.query " + e.message);
				options.error(e.error && e.message || e);
			}
		});
		break;
	case "update":
	case "delete":
		// Not currently implemented, let the user know
		alert("Not Implemented Yet");
		break;
	}
}

/**
 * This function will get or update user data from ACS.  The method signature in the repo
 * is slightly different from that of the book.  You should be able to follow along.  This is the sort
 * of inconsistency that is regrettable with this book.
 */
function processACSUsers(model, method, options) {
	switch (method) {
	case "update":
		var params = model.toJSON();
		//uses ACS to update the user data
		Cloud.Users.update(params, function(e) {
			if (e.success) {
				//the model in this case is a user
				model.meta = e.meta;
				//the first element of the users array contains the current user
				options.success && options.success(e.users[0]);
				model.trigger("fetch");
			} else {
				//no bueno
				Ti.API.error("Cloud.Users.update " + e.message);
				options.error && options.error(e.error && e.message || e);
			}
		});
		break;
	case "read":
		//we add this case so that we can obtain a list of users. This is finally
		//covered in Chapter Eight.
		options.data = options.data || {};
		model.id && (options.data.user_id = model.id);

		//whether we have a model id or not depends on whether we are pulling
		//the whole list of users, or a single user
		var readMethod = model.id ? Cloud.Users.show : Cloud.Users.query;

		readMethod(options.data || {}, function(e) {
			if (e.success) {
				model.meta = e.meta;
				//in the book, this is an if-else
				//single user
				if (e.users.length === 1) {
					options.success(e.users[0]);
				} else {
					//all users
					options.success(e.users);
				}
				//in the github repo, it is a ternary operator - they should be interchangeable
				//1 === e.users.length ? options.success(e.users[0]) : options.success(e.users);
				model.trigger("fetch");

				return;
			}

			Ti.API.error("Cloud.Users.query " + e.message);
			options.error && options.error(e.error && e.message || e);
		});
		break;

	}
}



var _ = require("alloy/underscore")._;

module.exports.sync = Sync;

module.exports.beforeModelCreate = function(config) {
	config = config || {};
	config.data = {};
	InitAdapter(config);
	return config;
};

module.exports.afterModelCreate = function(Model) {
	Model = Model || {};
	Model.prototype.config.Model = Model;
	return Model;
};