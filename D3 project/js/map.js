// Data sources
var map_link = "https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw";
var attribution_text = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' + '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery © <a href="http://mapbox.com">Mapbox</a>';
var burglar_url = 'https://github.com/r5cm/209_final_project/blob/master/D3%20project/images/bandit-icon-529521.png?raw=true'
var gun_url = 'https://github.com/r5cm/209_final_project/blob/master/D3%20project/images/icon_gun.png?raw=true'
var icons = {
    "TRAFFIC STOP": "./images/i_traffic_stop.png"
}
var nix_url = './images/warning.png'

// Icon variables
var icon_size = [30, 30];
var icon_anchor = [15, 30];
var popup_anchor = [-3, -30]

var nixIcon = L.icon({
    iconUrl: nix_url,
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var i2_other_4 = L.icon({
    iconUrl: "./images/i2_other_4.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});

var i2_other_3 = L.icon({
    iconUrl: "./images/i2_other_3.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});

var i2_other_2 = L.icon({
    iconUrl: "./images/i2_other_2.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var i2_property_theft_4 = L.icon({
    iconUrl: "./images/i2_property_theft_4.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var i2_property_theft_3 = L.icon({
    iconUrl: "./images/i2_property_theft_3.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var i2_vehicle_3 = L.icon({
    iconUrl: "./images/i2_vehicle_3.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var i2_vehicle_2 = L.icon({
    iconUrl: "./images/i2_vehicle_2.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var i2_vehicle_1 = L.icon({
    iconUrl: "./images/i2_vehicle_1.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var i2_local_state_2 = L.icon({
    iconUrl: "./images/i2_local_state_2.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var i2_sex_offense_4 = L.icon({
    iconUrl: "./images/i2_sex_offense_4.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var i2_police_stop_2 = L.icon({
    iconUrl: "./images/i2_police_stop_2.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var i2_hazard_4 = L.icon({
    iconUrl: "./images/i2_hazard_4.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var i2_hazard_3 = L.icon({
    iconUrl: "./images/i2_hazard_3.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var i2_hazard_2 = L.icon({
    iconUrl: "./images/i2_hazard_2.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var i2_non_crime_2 = L.icon({
    iconUrl: "./images/i2_non_crime_2.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var i2_non_crime_1 = L.icon({
    iconUrl: "./images/i2_non_crime_1.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var i2_animal_case_3 = L.icon({
    iconUrl: "./images/i2_animal_case_3.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var i2_assault_4 = L.icon({
    iconUrl: "./images/i2_assault_4.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var i2_fraud_3 = L.icon({
    iconUrl: "./images/i2_fraud_3.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var i2_undefined_3= L.icon({
    iconUrl: "./images/i2_undefined_3.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});

var icons = {
    "i2_other_4": i2_other_4,
    "i2_other_3": i2_other_3,
    "i2_other_2": i2_other_2,
    "i2_property_damage_theft_4": i2_property_theft_4,
    "i2_property_damage_theft_3": i2_property_theft_3,
    "i2_vehicle_3": i2_vehicle_3, 
    "i2_vehicle_2": i2_vehicle_2, 
    "i2_vehicle_1": i2_vehicle_1, 
    "i2_local_state_law_2": i2_local_state_2,
    "i2_sex_offense_4": i2_sex_offense_4,
    "i2_police_stop_2": i2_police_stop_2,
    "i2_hazard_4": i2_hazard_4,
    "i2_hazard_3": i2_hazard_3,
    "i2_hazard_2": i2_hazard_2,
    "i2_non_crime_2": i2_non_crime_2,
    "i2_non_crime_1": i2_non_crime_1,
    "i2_animal_case_3": i2_animal_case_3,
    "i2_assault_4": i2_assault_4,
    "i2_fraud_3": i2_fraud_3,
    "undefined": i2_undefined_3
};

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

// LatLong parser
var parseLatLng = function(string) {
    split = string.slice(1, -1).split(', ');
    return split;
}

// Draw markers function
var draw_markers = function(data) {
    markersGroup = L.layerGroup().addTo(map);
    for (var i = 0; i < data.length; i++) {
        // Get vars
        var coords = data[i]['LatLng'].replace('(', '').replace(')', '').split(', ');
        var lat = parseFloat(coords[0]);
        var lon = parseFloat(coords[1]);
        var date = '<b>Date: </b>' + data[i]['DateTime'].format("DD-MM-YYYY");
        var cat = capitalizeFirstLetter(data[i]['Category']);

        // Create points and popups
        var point = L.marker([lat, lon], {
            icon: icons[data[i]['Icon']]
        });
        var cat_pu = '<b>Category: </b>' + cat;
        var disp_pu = '<b>Disposition: </b>' + capitalizeFirstLetter(data[i]['Disposition'])
        var pu_content = '<p>' + date + '<br />' + cat_pu + '<br />' + disp_pu + '</p>'
        try { 
            point.bindPopup(pu_content)
                .addTo(markersGroup);
        } catch {
            console.log(data[i]);
        }
		get_visible_data_summary()
    };
}

// Draw Nix markers function
var draw_nix_markers = function(data) {
    markersGroup2 = L.layerGroup().addTo(map);
    for (var i = 0; i < data.length; i++) {
        // Get vars
        var coords = data[i]['latlng'].replace('(', '').replace(')', '').split(', ');
        var lat = parseFloat(coords[0]);
        var lon = parseFloat(coords[1]);
        var date = '<b>Date: </b>' + data[i]['DateTime'].format("DD-MM-YYYY HH:MM")

        var point = L.marker([lat, lon], {
            icon: nixIcon
        });

        //Create popup
        var cat = data[i]['priority'] + ': ' + data[i]['headline']

        if (data[i]['title'] == 'False') {
            data[i]['title'] = '';
        }
        if (data[i]['address'] == 'False') {
            data[i]['address'] = '';
        }

        disp = data[i]['title'] + '<br />' + data[i]['address'];

        link = 'https://local.nixle.com/' + data[i]['link'];

        var pu_content = '<p>' + date + '<br /><b>' + cat + '</b><br />' + disp + '</p><a target="_blank" href="' + link + '">Read more...</a>'
        point.bindPopup(pu_content)
            .addTo(markersGroup2);

        if (i == 0) {

            header_content = '<p><b>' + data[i]['DateTime'].format("DD-MM-YYYY HH:MM") + '&nbsp;&nbsp;' + cat + '</b><br />' +
                data[i]['title'] + ",&nbsp;" + data[i]['address'] + '<br /><a target="_blank" href="' + link + '">Read more...</a></p>';
            document.getElementById("latest_warning").innerHTML = header_content;

        }

    }

    // Get summary table for the first time.
    get_visible_data_summary()
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

// get equivalences function
var get_equivalence = function(search_obj, in_obj, return_var) {
    if (search_obj['Category'] in in_obj) {
        return in_obj[search_obj['Category']][return_var];
    } else {
        return 'undefined';
    };
};

//-------------------------
// Build view
//-------------------------

// Add data
d3.csv("./data/test_data_2.csv", function(data) {
    d3.csv("./data/n_latest.csv", function(data_nxl) {
        d3.csv("./data/category_grouping.csv", function(data_cats) {

            // Parse categories table
            cats_equiv = {};
            data_cats.forEach(function(d) {
                row = {}
                key = d['category'] 
                value = {}
                value['category_correct'] = d['category_correct'] 
                value['risk'] = d['risk']
                value['super_category'] = d['super_category']
                value['icon'] = 'i2_' + d['super_category'] + '_' + d['risk'] 
                cats_equiv[key] = value
            })

            // Parse data and create data arrays
            data.forEach(function(d) {
                d['DateTime'] = moment(d['Date'], "M/D/YYYY HH:mm").utcOffset(-480);
                d['LatLngArr'] = parseLatLng(d['LatLng']);
                d['Risk'] = get_equivalence(d, cats_equiv, 'risk') 
                d['Icon'] = get_equivalence(d, cats_equiv, 'icon') 
                d['SuperCategory'] = get_equivalence(d, cats_equiv, 'super_category') 
                d['Category'] = get_equivalence(d, cats_equiv, 'category_correct') 
            })

            data_nxl.forEach(function(d) {
                d['DateTime'] = moment(d['Date']).utcOffset(-480);
            })
            data_filtered_1 = data;
            data_filtered_2 = data;

            // Draw datasets to console
            console.log('Daily crime log:')
            console.log(data)            
            console.log('Categories equivalences:')
            console.log(cats_equiv)
            console.log('Nixle:')
            console.log(data_nxl)

            // Draw markers
            draw_markers(data);
            draw_nix_markers(data_nxl);

            // Filter function
            var category_filter = false;
            var start_date_filter = false;
            var end_date_filter = false;
            var filter_data = function(value, type) {
                data_filtered_1 = data; 
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
                // data_filtered_1 = [];
                if (category_filter == "All" || !category_filter) {
                    data_filtered_1 = data;
                } else {
                    data_filtered_1 = []
                    for (var i = 0; i < data.length; i++) {
                        if (data[i]['Category'] == value) data_filtered_1.push(data[i]);
                    };
                };
                data_filtered_2 = data_filtered_1;
                // Filter date
                if (start_date_filter) {
                    data_filtered_2 = [];
                    for (var i = 0; i < data_filtered_1.length; i++) {
                        var record = data_filtered_1[i];
                        if (start_date_filter <= record['DateTime'] && record['DateTime'] <= end_date_filter) {
                            data_filtered_2.push(record);
                        };
                    };
                };
                if (document.getElementById('btn_points_inp').checked) {
                    draw_markers(data_filtered_2);
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
            console.log("Min date = " + min_date + " Max date: " + max_date);

            // Add input menu
            d3.select('#divfilter')
                .append('p')
                .text("Filter by Date/Hour")
                .attr('align', 'left')
            d3.select('#divfilter')
                .append('input')
                .attr('class', 'form-control')
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
            //console.log("Categories:");
            //console.log(categories);

            // Add crime category menu
            d3.select("#divfilter")
                .append("p")
                .text("Category")
                .attr("align", "left")
                .append("select")
                .attr("id", "crimeSelector")
                .attr('class', 'form-control')
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

            var timeSeries = hist();

            timeSeries.callback(function(bounds) {
                //console.log(moment(bounds[0]));
                $('#datetimes').data('daterangepicker').setStartDate(bounds[0]);
                $('#datetimes').data('daterangepicker').setEndDate(bounds[1]);
                filter_data([bounds[0], bounds[1]], 'date');
            });

            timeSeries.data(data);
            timeSeries.plot();


            //--------------
            // Heatmap 
            //--------------

            var show_heatmap = function(_) {
                if (!document.getElementById('btn_heatmap_inp').checked) {
                    hm_points = data_filtered_2.map(d => d['LatLngArr']);
                    heat = L.heatLayer(hm_points);
                    heat.addTo(map);
                } else {
                    heat.remove();
                }
            }

            var show_points = function(_) {
                if (!document.getElementById('btn_points_inp').checked) {
                    draw_markers(data_filtered_2);
                } else {
                    console.log("Entered hide points")
                    console.log(map.hasLayer(markersGroup))

                    if (map.hasLayer(markersGroup)) {
                        markersGroup.clearLayers();
						get_visible_data_summary();
                    }


                }

            }

            var show_warn = function(_) {

                if (!document.getElementById('btn_warn_inp').checked) {

                    draw_nix_markers(data_nxl);

                } else {

                    if (map.hasLayer(markersGroup2)) {
                        markersGroup2.clearLayers();
						get_visible_data_summary();
                    }

                }

            }

            d3.select('#btn_heatmap')
                .on('click', show_heatmap);
            d3.select('#btn_points')
                .on('click', show_points);
            d3.select('#btn_warn')
                .on('click', show_warn);
        })
    })
});



var hist = function() {

    // Initialise data structures.s
    var margin = {
        "left": 20,
        "top": 5,
        "bottom": 30,
        "right": 20
    };

    // Get/set functions.
    var callback = function() {}
    var callback_ = function(_) {
        var that = this;
        if (!arguments.length) return callback;
        callback = _;
        return that;
    }
    var data = [];
    var avg = 0;
    var data_ = function(_) {
        var that = this;
        if (!arguments.length) return data;
        data = _;
        return that;
    }

    var hist, brush;

    var x, width;
    var y, height;

    // Create the binned histogram data and configure scales. 
    var setup_ = function(_) {

        d3.select(window).on('resize', refilter_);

        // Set geometry.
        height = parseInt(d3.select('.t_series').style('height')) - 40;
        width = parseInt(d3.select('.t_series').style('width')) - 20;


        //console.log(width);

        x = d3.scaleTime()
            .range([0, width - margin.left - margin.right]);

        y = d3.scaleLinear()
            .range([height - margin.bottom, 0]);


        if (hist) {
            d3.select(hist.node().parentNode).style("width", width);
            d3.select(hist.node().parentNode).style("height", height);
        } else {

            // Create canvas and scales.
            hist = d3.select(".t_series")
                .append("svg")
                .attr("class", "viz")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        }

        var dayExtent = d3.extent(data, function(d) {
            return d.DateTime;
        });

        var dayBins = d3.timeDays(d3.timeDay.offset(dayExtent[0], -1),
            d3.timeDay.offset(dayExtent[1], 1));

        x.domain(d3.extent(dayBins));

        var histogram = d3.histogram()
            .value(function(d) {
                return d.DateTime;
            })
            .thresholds(dayBins);

        var bins, use_data;

        // Filter if argument supplied.
        if (!arguments.length || (!_)) {
            use_data = data;
        } else {
            var bounds = _;
            use_data = data.filter(function(d) {
                return (d.dt < bounds[1] && d.dt > bounds[0]);
            });
        }


        bins = histogram(use_data);

        //console.log(bins);

        y.domain([0, d3.max(bins, function(d) {
            return d.length;
        })]);

        return bins;

    }

    // (Re)plot the axes.
    var axis_ = function() {

        hist.selectAll(".axis").remove();

        //hist.append("g")
        //    .attr("class", "axis")
        //    .call(d3.axisLeft(y));

        hist.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(0," + String(height - margin.bottom) + ")")
            .call(d3.axisBottom(x));

        // Define the brush.
        brush = d3.brushX()
            .extent([
                [2, 1],
                [width - 49, height - 10]
            ])
            .on("end", function() {
                // If a span is selected.
                if (d3.event.selection) {
                    start = d3.event.selection[0];
                    end = d3.event.selection[1];
                    // Convert bounds back to DateTime.
                    callback([x.invert(start), x.invert(end)]);
                } else {
                    callback();
                }
            });


    }

    // Initialise the bar chart and plot data.
    var plot_ = function() {

        bins = setup_();
        axis_();

        bar = hist.selectAll(".bar")
            .data(bins)
            .enter()
            .append("g")
            .attr("class", "bar")
            .attr("transform", function(d) {
                return "translate(" + x(d.x0) + "," + y(d.length) + ")";
            });
        bar.append("rect")
            .attr("x", 1)
            .attr("class", "bar")
            .attr("width", function(d) {
                return x(d.x1) - x(d.x0) - 1;
            })
            .attr("height", function(d) {
                return height - margin.bottom - y(d.length);
            })
            .attr("fill", function(d, i) {
                // Bar colours.
                return "#FDB515";
            });

        hist.append("g")
            .attr("class", "brush")
            .call(brush);

    }


    // Update the histogram to use filtered data.
    var refilter_ = function(bounds) {

        bins = setup_(bounds);
        axis_();

        bar.data(bins)
            .attr("transform", function(d) {
                return "translate(" + x(d.x0) + "," + y(d.length) + ")";
            })
            .select("rect")
            .attr("x", 1)
            .attr("width", function(d) {
                return x(d.x1) - x(d.x0) - 1;
            })
            .attr("height", function(d) {
                return height - margin.bottom - y(d.length);
            })
            .attr("fill", function(d, i) {
                return "#FDB515";
            });

    }

    var public = {
        "plot": plot_,
        "data": data_,
        "refilter": refilter_,
        "callback": callback_
    };

    return public;

}




map.on("zoomend", get_visible_data_summary)
map.on("moveend", get_visible_data_summary)
