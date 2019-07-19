// Data sources
var map_link = "https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw";
var attribution_text = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' + '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery © <a href="http://mapbox.com">Mapbox</a>';
var mm_geodata = "https://raw.githubusercontent.com/r5cm/209_final_project/master/D3%20project/data/test_data.csv"
var burglar_url = 'https://github.com/r5cm/209_final_project/blob/master/D3%20project/images/bandit-icon-529521.png?raw=true'
var gun_url = 'https://github.com/r5cm/209_final_project/blob/master/D3%20project/images/icon_gun.png?raw=true'

// Icon variables
var burglarIcon = L.icon({
            iconUrl: burglar_url,
            iconSize:     [14, 30],
            iconAnchor:   [7, 30],
            popupAnchor:  [-3, -76]
        });
var gunIcon = L.icon({
            iconUrl: gun_url,
            iconSize:     [14, 30],
            iconAnchor:   [7, 30],
            popupAnchor:  [-3, -76]
        });

// Capitalize first letter function
function capitalizeFirstLetter(string) {
  var first = string.charAt(0).toUpperCase();
  var rest = string.slice(1).toLowerCase();
  return first + rest
}

// Draw markers function
var draw_markers = function(data) {
  markersGroup = L.layerGroup().addTo(map);
  for(var i=0; i < data.length; i++) {
    // Get vars
    var coords = data[i]['LatLng'].replace('(', '').replace(')', '').split(', ');
    var lat = parseFloat(coords[0]);
    var long = parseFloat(coords[1]);
    var date = '<b>Date: </b>' + data[i]['Date']
    
    // Create points
    if (i % 2 == 0) {
      var point = L.marker([lat, long], {icon: burglarIcon});  
    } else {
      var point = L.marker([lat, long], {icon: gunIcon, rotationAngle: 45});  
    }        
    
    //Create popup
    var cat = '<b>Category: </b>' + capitalizeFirstLetter(data[i]['Category'])
    var disp = '<b>Disposition: </b>' + capitalizeFirstLetter(data[i]['Disposition'])
    var pu_content = '<p>'+date+'<br />'+cat+'<br />'+disp+'</p>'
    point.bindPopup(pu_content)
          .addTo(markersGroup);
  }
}

// View without data
function initializePage() {
  map = L.map("divmap").setView([37.8782683,-122.259196], 13);
  L.tileLayer(map_link, {maxZoom: 18, attribution: attribution_text, id: "mapbox.light"})
    .addTo(map);
}
initializePage();

// Add data
d3.csv(mm_geodata, function(data) {
  console.log("Data:");
  console.log(data);
  draw_markers(data);

  // Get unique crime categories
  var categories = ['All'];
  for (var i=0; i < data.length; i++) {
    var category = data[i]['Category'];
    if(categories.indexOf(category) < 0) {
        categories.push(category);
    };
  };
  console.log("Categories:");
  console.log(categories);

  // Add crime category menu
  d3.select("#divfilter")
    .append("p")
      .text("Category")
      .attr("align", "left")
    .append("select")
      .attr("id", "crimeSelector")
      .selectAll("option")
      .data(categories)
      .enter()
      .append("option")
        .attr("class", "cat_option")
        .text(d => capitalizeFirstLetter(d))
        .attr("value", d => d)
        .attr("color", "black");

  // Filter data based on crime category
  var filter_cat = function() {
    if (map.hasLayer(markersGroup)) {
      markersGroup.clearLayers();
    };
    var selected = d3.select(this).property('value');
    console.log(selected);
  };
  d3.select('#crimeSelector')
    .on("change", filter_cat);
  


  //     var crimeFilter = function(d, selected) {
          
  //     }
  //     d3.select("#crimeSelector")
  //       .on("change", function(d) {
  //           selected = this['value'];
  //           dateMenuFilter(data, selected);
  //           // main(dataFiltered);
  //         });
  
     
});