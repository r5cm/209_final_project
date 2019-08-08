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
	create_table(visible_data);
}

function create_table(d) {
	var dict = {}, prev;
	d.sort();
	for(var i = 0; i < d.length; i++){
		if(d[i] !== prev){
			dict[d[i]] = 1;
		} else {
			dict[d[i]]++;
		}
		prev = d[i];
	}
	var ordered_tuples = Object.keys(dict).map(function(key){
		return [key,dict[key]]
	});

	ordered_tuples.sort((a,b) => b [1] - a[1]);
	// console.log(ordered_tuples)
	var html = "<table id='summary_table'><caption>Most frequent events in this area</caption><tbody style='cursor:pointer'><tr class='tr_text'>";
	for(var i = 0; i < Math.min(ordered_tuples.length,10); i++){
		html += "<td>" + ordered_tuples[i][0] + '<td class="count">' + ordered_tuples[i][1] + "</td></tr><tr class='tr_text'>";
	}
	html += "</tr></tbody></table>";
	
	document.getElementById("summary").innerHTML = html

	onRowClick("summary_table", function (row){
		var value = row.getElementsByTagName("td")[0].innerHTML;
		d3.select('#superCategorySelector').property('value',value);
		var event = new Event('change')
		document.getElementById('superCategorySelector').dispatchEvent(event)
	});
}

function tabulate_data(data) {
	var cats = [];
	for(var i = 0; i < data.length; i++){
		cats.push(capitalizeFirstLetter(data[i].Category))
	};
	create_table(cats)
};

function onRowClick(tableId, callback) {
    var table = document.getElementById(tableId),
		rows = table.getElementsByTagName("tr"),
        i;
    for (i = 0; i < rows.length; i++) {
        table.rows[i].onclick = function (row) {
            return function () {
                callback(row);
            };
        }(table.rows[i]);
    }
};

