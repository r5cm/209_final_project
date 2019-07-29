// Summary table from current elements in view.

invalid_entries = ['UPDATE:']


function get_visible_data_summary(){
	var visible_data = [];
	map.eachLayer(function(layer) {
		if(layer instanceof L.Marker) {
			if(map.getBounds().contains(layer.getLatLng())) {
				//separate Logs from Nixle:
				try {
					x = layer._popup._content
					if(/href/.test(x)){
						split0 = x.split('<br />').slice(1,this.length-1) // First and last are no good.
						if(split0[1].length > 0 && invalid_entries.includes(split0[1]) == false){
							visible_data.push(split0[1]);
						}else{
							visible_data.push(split0[0].split(':').slice(-1)[0].replace(' </b>','').trim());
						}
					}else{
						cat = layer._popup._content.match(/<br.*\/>/)[0].match(/\/b>.*</)[0].match(/>.*</)[0].replace(/[><]/g,'').replace(/br \//,'').trim(); //Regular expression to get the crime.
						visible_data.push(cat);
					};
				}catch (e){
				};		
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
	
	var html = "<table><caption>Most frequent events in this area</caption><tr>";
	for(var i = 0; i < Math.min(ordered_tuples.length,10); i++){
		html += "<td>" + ordered_tuples[i][0] + '<td class="count">' + ordered_tuples[i][1] + "</td></tr><tr>";
	}
	html += "</tr></table>";
	
	document.getElementById("summary").innerHTML = html
}
