// Create a state object to geocode.

var GeocoderState = function() {
	this.address = '';
	// this.bounds = null;
	this.country = 'US';
	
	GeocoderState.prototype.reset = function() {
		this.query = '';
		// this.bounds = null;
		this.country = 'US';
	};
	
	// Build a geocoding request from the global state. 
	// @returns an object suitable to be fed to the
	// google.maps.Geocoder.geocode() method as per
	// http://developers.google.com/maps/documentation/javascript/geocoding#GeocodingRequests
	
	GeocoderState.prototype.buildGeocodingRequest =  function() {
		//Build the geocoding request from state. 
		//
		var request = {};
		request.address = this.address;
		request.region = this.country;
		// if (this.bounds) {
			// request.bounds = this.bounds.getSouthWest().toUrlValue(6) + ',' +
                      // this.bounds.getNorthEast().toUrlValue(6));
		// };
		return request;
	};
	
	// Build a link to the geocoding API web service to geocode the global state.
	// @returns a ready to use request to the geocoding API. 
	GeocoderState.prototype.buildLinkToWebService = function() {
		url = 'https://maps.googleapis.com/maps/api/geocode/json?';
		var request = this.buildGeocodingRequest();
		if (request.address) {
			url += '&address=' + encodeURIComponent(request.address);
			url += '&region=' + request.region;
			console.log(url)
			// if (request.bounds) {
				// url += '&bounds=' + request.bounds.getSouthWest().toUrlValue(6) + 
					// '|' + request.bounds.getNorthEast().toUrlValue(6);
			// };
		};
		console.log(url)
		return url
	};
};

// Event handler using the GeocoderState object. 
var GeocoderTool = function() {
	// var boundsRect;
	var geocodingResults = [];
	var waitInternal = null;
	var state = new GeocoderState();
	var geocoder = new google.maps.Geocoder();

	
	// Wait for the query-input DOM element to be ready. This is necessary for an autocomplete function. 
	
	GeocoderTool.prototype.waitForQueryInput = function(id) { //id is the input box we're waiting for, it can be the starting or ending point. 
		var deferred = $.Deferred(); //$ is a shorthand for jQuery. 
		waitInternal = setInterval(function() {
			var element = document.getElementById(id);
			if (element != null) {
				clearInterval(waitInternal);
				deferred.resolve();
			};
		}, 50);
		return deferred.promise();
	};
	
	// Handle a geocoding response.
	GeocoderTool.prototype.handleGeocodingResponse = function(results, status) {
		console.log(status)
		if (status === "OK"){
			console.log(results[0].geometry.location.lat());
		};
	};
	// Send a request to geocode the global state. 
	
	GeocoderTool.prototype.geocodeState = function() {
		var request = state.buildGeocodingRequest();
		
		console.log('Geocoding: ' + JSON.stringify(request));
		geocoder.geocode(request, this.handleGeocodingResponse);
	};
	
	GeocoderTool.prototype.updateStateFromSearchControl = function(id) {
		state.reset();
		state.address = document.getElementById(id).value;
		// state.bounds = map.getBounds();
		this.geocodeState();
	};
};

var get_route = function() {
	if (document.getElementById('start-input').value.length > 0 && document.getElementById('end-input').value.length > 0) {
		var tool = new GeocoderTool();
		tool.updateStateFromSearchControl('start-input');
	};
};

const node = document.getElementById('end-input');

node.addEventListener('keyup', function (event) {
	if (event.key === "Enter") {
		get_route();
	};
});