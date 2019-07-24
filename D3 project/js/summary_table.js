// Summary table from current elements in view.

function get_visible_data_summary(){
	var visible_data = [];
	map.eachLayer(function(layer) {
		if(layer instanceof L.Marker) {
			if(map.getBounds().contains(layer.getLatLng())) {
				// console.log(layer._popup._content) Fails near James Kenney Park
				try{
					cat = layer._popup._content.match(/<br.*\/>/)[0].match(/\/b>.*</)[0].match(/>.*</)[0].replace(/[><]/g,'').replace(/br \//,''); //Regular expression to get the crime.
					visible_data.push(cat); 
				}
				catch(TypeError){
					cat = layer._popup._content.split(/[t|y]: /)[1].split("<")[0].split("/")[1]; //Regular expression to get the crime from nixle objects, these say advisory/community/alert instead of category.
					visible_data.push(cat);
				}
			}
		}
	});
	var dict = {}, prev;
	visible_data.sort();
	//console.log(visible_data);
	for(var i = 0; i < visible_data.length; i++){
		if(visible_data[i] !== prev){
			dict[visible_data[i]] = 1;
		} else {
			dict[visible_data[i]]++;
		}
		prev = visible_data[i];
	}
	var ordered_tuples = Object.keys(dict).map(function(key){
		return [key,dict[key]]
	});
	//console.log(ordered_tuples)
	ordered_tuples.sort((a,b) => a[1] < b [1]);
	
	var html = "<table><tr>";
	for(var i = 0; i < Math.min(ordered_tuples.length,10); i++){
		html += "<td>" + ordered_tuples[i][0] + "<td>" + ordered_tuples[i][1] + "</td></tr><tr>";
	}
	html += "</tr></table>";
	
	document.getElementById("summary").innerHTML = html
}
