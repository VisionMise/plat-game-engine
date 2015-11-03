var playerAPI = function() {

	this.api 		= {};

	this.init 		= function() {
		this.api 	= new platAPI('player');
	};

	this.move 		= function(x, y) {
		this.api.call('moveTo', [x, y], function(data) {
			if (data == true) gsAPI.page('home', {}, '#content', function(event) {});
		});
	};

	this.goNorth	= function() {
		this.api.call('move', ['north'], function(data) {
			if (data == true) gsAPI.page('home', {}, '#content', function(event) {});
		});
	};

	this.goSouth	= function() {
		this.api.call('move', ['south'], function(data) {
			if (data == true) gsAPI.page('home', {}, '#content', function(event) {});
		});
	};

	this.goWest	= function() {
		this.api.call('move', ['west'], function(data) {
			if (data == true) gsAPI.page('home', {}, '#content', function(event) {});
		});
	};

	this.goEast	= function() {
		this.api.call('move', ['east'], function(data) {
			if (data == true) gsAPI.page('home', {}, '#content', function(event) {});
		});
	};

	return this.init();
};