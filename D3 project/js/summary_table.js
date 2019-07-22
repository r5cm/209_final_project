// Summary table from current elements in view.

function get_visible_data() {
	var visible_data = [];
	map.eachLayer(function(layer) {
		if(layer instanceof L.Marker) {
			if(map.getBounds().contains(layer.getLatLng())) {
				console.log("element:")
				console.log(layer._popup._content);
			}
		}
	});
}

setTimeout(get_visible_data,2000)