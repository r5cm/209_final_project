// Data sources
var map_link = "https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw";
var attribution_text = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' + '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery © <a href="http://mapbox.com">Mapbox</a>';
var burglar_url = 'https://github.com/r5cm/209_final_project/blob/master/D3%20project/images/bandit-icon-529521.png?raw=true'
var gun_url = 'https://github.com/r5cm/209_final_project/blob/master/D3%20project/images/icon_gun.png?raw=true'

// Icon variables
var burglarIcon = L.icon({
    iconUrl: burglar_url,
    iconSize: [14, 30],
    iconAnchor: [7, 30],
    popupAnchor: [-3, -35]
});
var gunIcon = L.icon({
    iconUrl: gun_url,
    iconSize: [14, 30],
    iconAnchor: [7, 30],
    popupAnchor: [-3, -35]
});

// Capitalize first letter function
function capitalizeFirstLetter(string) {
    var first = string.charAt(0).toUpperCase();
    var rest = string.slice(1).toLowerCase();
    return first + rest
}

// date-time parser
var parseDate = function(string) {
    splitted = string.split('/');
    return Date(splitted[2], splitted[0] - 1, splitted[1]);
};

// Draw markers function
var draw_markers = function(data) {
    markersGroup = L.layerGroup().addTo(map);
    for (var i = 0; i < data.length; i++) {
        // Get vars
        var coords = data[i]['LatLng'].replace('(', '').replace(')', '').split(', ');
        var lat = parseFloat(coords[0]);
        var lon = parseFloat(coords[1]);
        var date = '<b>Date: </b>' + data[i]['DateTime'].format("DD-MM-YYYY")

        // Create points
        if (i % 2 == 0) {
            var point = L.marker([lat, lon], {
                icon: burglarIcon
            });
        } else {
            var point = L.marker([lat, lon], {
                icon: gunIcon,
                rotationAngle: 45
            });
        }

        //Create popup
        var cat = '<b>Category: </b>' + capitalizeFirstLetter(data[i]['Category'])
        var disp = '<b>Disposition: </b>' + capitalizeFirstLetter(data[i]['Disposition'])
        var pu_content = '<p>' + date + '<br />' + cat + '<br />' + disp + '</p>'
        point.bindPopup(pu_content)
            .addTo(markersGroup);
    }
    // After markers have been drawn we make the summary table.
    console.log(get_visible_data_summary.call());
}

// View without data
function initializePage() {
    map = L.map("divmap").setView([37.8782683, -122.259196], 13);
    L.tileLayer(map_link, {
            maxZoom: 18,
            attribution: attribution_text,
            id: "mapbox.light"
        })
        .addTo(map);
}
initializePage();

//-------------------------
// Build view
//-------------------------

// Add data
d3.csv("/data/test_data_2.csv", function(data) {

    data.forEach(function(d) {
        d['DateTime'] = moment(d['Date']).utcOffset(-480);
        d['Date'] = d['Date'].slice(0, 8);
    })
    console.log("Data:");
    console.log(data);

    // Draw markers
    draw_markers(data);

    // Filter function
    var category_filter = false;
    var start_date_filter = false;
    var end_date_filter = false;
    var filter_data = function(value, type) {
        // remove all markers
        if (map.hasLayer(markersGroup)) {
            markersGroup.clearLayers();
        };
        // Set filter values
        if (type == 'category') {
            category_filter = value;
        }
        if (type == 'date') {
            start_date_filter = value[0];
            end_date_filter = value[1];
        }
        // Filter category
        data_filtered_1 = [];
        if (category_filter == "All" || !category_filter) {
            data_filtered_1 = data;
        } else {
            for (var i = 0; i < data.length; i++) {
                if (data[i]['Category'] == value) data_filtered_1.push(data[i]);
            };
        };
        // Filter date
        if (start_date_filter) {
            data_filtered_2 = [];
            console.log("Start date: " + start_date_filter.format("YYYY-MM-DD"));
            console.log("End date: " + end_date_filter.format("YYYY-MM-DD"));
            for (var i = 0; i < data_filtered_1.length; i++) {
                var record = data_filtered_1[i];
                if (start_date_filter <= record['DateTime'] && record['DateTime'] <= end_date_filter) {
                    data_filtered_2.push(record);
                };
            };
            // Add filtered markers
            console.log(data_filtered_2);
            draw_markers(data_filtered_2);
        } else {
            // Add filtered markers
            console.log(data_filtered_1);
            draw_markers(data_filtered_1);
        };

    };



    //--------------
    // Date filter
    //--------------

    // Get date range
    var min_date = moment();
    var max_date = moment().subtract(100, 'years');
    for (var i = 0; i < data.length; i++) {
        var date = data[i]['DateTime'];
        if (date < min_date) min_date = date;
        if (date > max_date) max_date = date;
    }
    // min_date = min_date.format("MM/DD/YYYY")
    // max_date = max_date.format("MM/DD/YYYY")
    console.log("Min date = " + min_date + " Max date: " + max_date);

    // Add input menu
    d3.select('#divfilter')
        .append('p')
        .text("Date-time")
        .attr('align', 'left')
    d3.select('#divfilter')
        .append('input')
        .attr('type', 'text')
        .attr('align', 'right')
        .attr('name', 'datetimes')
        .attr('id', 'datetimes')


    $('#datetimes').daterangepicker({
        ranges: {
            'All dates': [moment().subtract(5, 'years', moment())],
            'Today': [moment(), moment().add(1, 'days')],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
            'This year': [moment().startOf('year'), moment()]
        },

        "alwaysShowCalendars": true,
        "timePicker": true,
        "timePicker24Hour": true,
        "timePickerIncrement": 15,
        "startDate": moment().subtract(6, 'days'),
        "endDate": moment(),
    }, function(start, end, label) {
        console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
        filter_data([start, end], 'date');
    });

    //--------------
    // Crime filter
    //--------------

    // Get unique crime categories
    var categories = ['All'];
    for (var i = 0; i < data.length; i++) {
        var category = data[i]['Category'];
        if (categories.indexOf(category) < 0) {
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
    var filter_cat_val = "All";
    var filter_cat = function() {
        filter_cat_val = d3.select(this).property('value');
        console.log("Category selected: " + filter_cat_val);
        filter_data(filter_cat_val, 'category');
    };
    d3.select('#crimeSelector')
        .on("change", filter_cat);

});


// Draw Nix markers function
var draw_nix_markers = function(data) {
    markersGroup = L.layerGroup().addTo(map);
    for (var i = 0; i < data.length; i++) {
        // Get vars
        var coords = data[i]['LatLng'].replace('(', '').replace(')', '').split(', ');
        var lat = parseFloat(coords[0]);
        var lon = parseFloat(coords[1]);
        var date = '<b>Date: </b>' + data[i]['DateTime'].format("DD-MM-YYYY")

        // Create points
        if (i % 2 == 0) {
            var point = L.marker([lat, lon], {
                icon: burglarIcon
            });
        } else {
            var point = L.marker([lat, lon], {
                icon: gunIcon,
                rotationAngle: 45
            });
        }

        //Create popup
        var cat = '<b>Category: </b>' + capitalizeFirstLetter(data[i]['Category'])
        var disp = '<b>Disposition: </b>' + capitalizeFirstLetter(data[i]['Disposition'])
        var pu_content = '<p>' + date + '<br />' + cat + '<br />' + disp + '</p>'
        point.bindPopup(pu_content)
            .addTo(markersGroup);
    }
    // After markers have been drawn we make the summary table.
    console.log(get_visible_data_summary.call());
}

// Add Nix data
d3.csv("/data/n_latest.csv", function(data) {

    console.log(data);

});
