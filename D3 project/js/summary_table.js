// Summary table from current elements in view.

//Missing the defaultdict counter. Count elements in list. 

function get_visible_data() {
	//var parser = new DOMParser(); 
	var visible_data = [];
	map.eachLayer(function(layer) {
		if(layer instanceof L.Marker) {
			if(map.getBounds().contains(layer.getLatLng())) {
				console.log(layer._popup._content.match(/<br.*\/>/)[0].match(/\/b>.*</)[0].match(/>.*</)[0].replace(/[><]/g,'')); //Regular expression to get the crime
			}
		}
	});
}

setTimeout(get_visible_data,2000)