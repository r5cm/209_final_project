// Create a state object to geocode.

var GeocoderState = function() {
	this.address = '';
	this.bounds = null;
	this.country = 'US';
	this.loc = null;
	
	GeocoderState.prototype.reset = function() {
		this.query = '';
		this.bounds = null;
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
		if (this.bounds) {
			var sw = new google.maps.LatLng(this.bounds.getSouthWest().lat,this.bounds.getSouthWest().lng)
			var ne = new google.maps.LatLng(this.bounds.getNorthEast().lat,this.bounds.getNorthEast().lng)
			var b = new google.maps.LatLngBounds(sw,ne);
			request.bounds = b
			console.log(request)
		};
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
		state.bounds = map.getBounds();
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
	
var yellowIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = yellowIcon;

var get_route = function() {
	if (document.getElementById('start-input').value.length > 0) {
		promise0 = waitForQueryOutput('start-input');
		promise0.then(function(value) {
			start_lat = value.lat();
			start_long = value.lng();

            // Routing
            if(document.getElementById('end-input').value.length > 0) {

    			promise1 = waitForQueryOutput('end-input');
	    		promise1.then(function(values) {
	    			end_lat = values.lat();
	    			end_long = values.lng();
	    			if(typeof(route) === 'undefined') {
	    				route = L.Routing.control({
	    					waypoints:[L.latLng(start_lat,start_long)
	    					,L.latLng(end_lat,end_long)],
	    					fitSelectedRoutes: true, icon: yellowIcon
	    				}); 
	    				route.addTo(map);
	    				route.hide();
                        document.getElementById('btn_clear').disabled = false;
	       			} 
                    else{ 
    					L.setWaypoints([L.latLng(start_lat,start_long),L.latLng(end_lat,end_long)]);
    				}
    			});
		    }

            // Searching
            else {
                L.marker(L.latLng(start_lat,start_long)).addTo(map);       
                map.flyTo(L.latLng(start_lat,start_long), 16);         
            }


	    });
    }
}


function search_enable() {

    document.getElementById('end-input').value = '';
    document.getElementById('end-input').disabled = true;
    document.getElementById('end-input').placeholder = "";
    document.getElementById('start-input').placeholder = "Enter location...";

}

function route_enable() {

    document.getElementById('end-input').disabled = false;
    document.getElementById('end-input').placeholder = "Enter end point...";
    document.getElementById('start-input').placeholder = "Enter start point...";

}

function clear_route() {

    document.getElementById('start-input').value = '';
    document.getElementById('end-input').value = '';
    map.removeControl(route);

    document.getElementById('btn_clear').disabled = true;

}

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
