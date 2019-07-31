// Create a state object to geocode.

var GeocoderState = function() {
	this.address = '';
	// this.bounds = null;
	this.country = 'US';
	this.loc = null;
	
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
			state.loc = results[0].geometry.location;
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
		promise = new Promise(function(resolve,reject) {
			var wait = setInterval(function() {
				if (state.loc !== null){
					clearInterval(wait);
					resolve(state.loc);
				};
			},50);
		});		
		return promise;
	};
};

var waitForQueryOutput = function (id) {
	var tool = new GeocoderTool();
	promise = tool.updateStateFromSearchControl(id);
	return promise 
};
	
var get_route = function() {
	if (document.getElementById('start-input').value.length > 0 && document.getElementById('end-input').value.length > 0) {
		promise0 = waitForQueryOutput('start-input');
		promise0.then(function(value) {
			start_lat = value.lat();
			start_long = value.lng();
			promise1 = waitForQueryOutput('end-input');
			promise1.then(function(values) {
				end_lat = values.lat();
				end_long = values.lng();
				console.log(typeof(route))
				if(typeof(route) === 'undefined') {
					route = L.Routing.control({
						waypoints:[L.latLng(start_lat,start_long)
						,L.latLng(end_lat,end_long)],
						fitSelectedRoutes: true
					});
					route.addTo(map);
					route.hide();
				}else{
					route.setWaypoints([L.latLng(start_lat,start_long),L.latLng(end_lat,end_long)]);
				};
			});
		});
	};
};

const node0 = document.getElementById('start-input');

node0.addEventListener('keyup', function (event) {
	if (event.key === "Enter") {
		get_route();
	};
});

const node1 = document.getElementById('end-input');

node1.addEventListener('keyup', function (event) {
	if (event.key === "Enter") {
		get_route();
	};
});