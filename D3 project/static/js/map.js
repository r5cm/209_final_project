// Data sources
var map_link = "https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw";
var attribution_text = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' + '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery © <a href="http://mapbox.com">Mapbox</a>';
var burglar_url = 'https://github.com/r5cm/209_final_project/blob/master/D3%20project/images/bandit-icon-529521.png?raw=true'
var gun_url = 'https://github.com/r5cm/209_final_project/blob/master/D3%20project/images/icon_gun.png?raw=true'
var icons = {
    "TRAFFIC STOP": "static/images/i_traffic_stop.png"
}
var nix_url = 'static/images/warning.png'

// Icon variables
var icon_size = [30, 30];
var icon_anchor = [15, 30];
var popup_anchor = [-3, -30]

// var nixIcon = L.icon({
//     iconUrl: nix_url,
//     iconSize: icon_size,
//     iconAnchor: icon_anchor,
//     popupAnchor: popup_anchor
// });
var animal_case_2 = L.icon({
    iconUrl: "static/images/i3_animal_case_2.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var animal_case_4 = L.icon({
    iconUrl: "static/images/i3_animal_case_4.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var assault_3 = L.icon({
    iconUrl: "static/images/i3_assault_3.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var assault_4 = L.icon({
    iconUrl: "static/images/i3_assault_4.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var counterfeiting_fraud_1 = L.icon({
    iconUrl: "static/images/i3_counterfeiting_fraud_1.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var homicide_4 = L.icon({
    iconUrl: "static/images/i3_homicide_4.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var others_1 = L.icon({
    iconUrl: "static/images/i3_others_1.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var others_2 = L.icon({
    iconUrl: "static/images/i3_others_2.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var others_3 = L.icon({
    iconUrl: "static/images/i3_others_3.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var others_4 = L.icon({
    iconUrl: "static/images/i3_others_4.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var property_damage_2 = L.icon({
    iconUrl: "static/images/i3_property_damage_2.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var property_damage_3 = L.icon({
    iconUrl: "static/images/i3_property_damage_3.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var robbery_theft_2 = L.icon({
    iconUrl: "static/images/i3_robbery_theft_2.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var robbery_theft_3 = L.icon({
    iconUrl: "static/images/i3_robbery_theft_3.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var robbery_theft_4 = L.icon({
    iconUrl: "static/images/i3_robbery_theft_4.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var sexual_offense_3 = L.icon({
    iconUrl: "static/images/i3_sexual_offense_3.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var sexual_offense_4 = L.icon({
    iconUrl: "static/images/i3_sexual_offense_4.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var suspicious_event_2 = L.icon({
    iconUrl: "static/images/i3_suspicious_event_2.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var undefined_1 = L.icon({
    iconUrl: "static/images/i3_undefined_1.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var undefined_2 = L.icon({
    iconUrl: "static/images/i3_undefined_2.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});
var undefined_3 = L.icon({
    iconUrl: "static/images/i3_undefined_3.png",
    iconSize: icon_size,
    iconAnchor: icon_anchor,
    popupAnchor: popup_anchor
});



var icons = {
    'i3_animal_case_2': animal_case_2,
    'i3_animal_case_4': animal_case_4,
    'i3_assault_3': assault_3,
    'i3_assault_4': assault_4,
    'i3_counterfeiting_fraud_1': counterfeiting_fraud_1,
    'i3_homicide_4': homicide_4,
    'i3_others_1': others_1,
    'i3_others_2': others_2,
    'i3_others_3': others_3,
    'i3_others_4': others_4,
    'i3_property_damage_2': property_damage_2,
    'i3_property_damage_3': property_damage_3,
    'i3_robbery_theft_2': robbery_theft_2,
    'i3_robbery_theft_3': robbery_theft_3,
    'i3_robbery_theft_4': robbery_theft_4,
    'i3_sexual_offense_3': sexual_offense_3,
    'i3_sexual_offense_4': sexual_offense_4,
    'i3_suspicious_event_2': suspicious_event_2,
    'i3_undefined_1': undefined_1,
    'i3_undefined_2': undefined_2,
    'i3_undefined_3': undefined_3    
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
        var coords = data[i]['LatLngArr'];
        var lat = parseFloat(coords[0]);
        var lon = parseFloat(coords[1]);
        var date = '<b>Date: </b>' + data[i]['DateTime'].format("DD-MM-YYYY");
        var super_cat = capitalizeFirstLetter(data[i]['SuperCategory'])
        var cat = capitalizeFirstLetter(data[i]['Category']);

        // Create points and popups
        var point = L.marker([lat, lon], {
            icon: icons[data[i]['Icon']]
        });
        var supercat_pu = '<b>Category: </b>' + super_cat;
        var cat_pu = '<b>Details: </b>' + cat;
        if (data[i]['source'] == 'nixle') {
            var link = 'https://local.nixle.com/' + data[i]['link'];
            var pu_content = '<p>' + date + '<br />' + supercat_pu + '<br />' + cat_pu + '</p><a target"_blank" href="' + link + '">Read more...</a>'
            
        } else {
            var pu_content = '<p>' + date + '<br />' + supercat_pu + '<br />' + cat_pu + '</p>' 
        }
        try { 
            point.bindPopup(pu_content)
                .addTo(markersGroup);
        } catch {
            console.log(data[i]);
        }
		get_visible_data_summary()
    };
}

// // Draw Nix markers function
// var draw_nix_markers = function(data) {
//     markersGroup2 = L.layerGroup().addTo(map);
//     for (var i = 0; i < data.length; i++) {
//         // Get vars
//         var coords = data[i]['latlng'].replace('(', '').replace(')', '').split(', ');
//         var lat = parseFloat(coords[0]);
//         var lon = parseFloat(coords[1]);
//         var date = '<b>Date: </b>' + data[i]['DateTime'].format("DD-MM-YYYY HH:MM")

//         var point = L.marker([lat, lon], {
//             icon: nixIcon
//         });

//         //Create popup
//         var cat = data[i]['priority'] + ': ' + data[i]['headline']

//         if (data[i]['title'] == 'False') {
//             data[i]['title'] = '';
//         }
//         if (data[i]['address'] == 'False') {
//             data[i]['address'] = '';
//         }

//         disp = data[i]['title'] + '<br />' + data[i]['address'];

//         link = 'https://local.nixle.com/' + data[i]['link'];

//         var pu_content = '<p>' + date + '<br /><b>' + cat + '</b><br />' + disp + '</p><a target="_blank" href="' + link + '">Read more...</a>'
//         point.bindPopup(pu_content)
//             .addTo(markersGroup2);

//         if (i == 0) {

//             header_content = '<p><b>' + data[i]['DateTime'].format("DD-MM-YYYY HH:MM") + '&nbsp;&nbsp;' + cat + '</b><br />' +
//                 data[i]['title'] + ",&nbsp;" + data[i]['address'] + '<br /><a target="_blank" href="' + link + '">Read more...</a></p>';
//             document.getElementById("latest_warning").innerHTML = header_content;

//         }

//     }

//     // Get summary table for the first time.
//     get_visible_data_summary()
// }

var draw_heatmap = function(data) {
	tabulate_data(data)
    hm_points = data.map(d => d['LatLngArr']);
    heat = L.heatLayer(hm_points);
    heat.addTo(map);
};

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
    if (search_obj['Category_raw'] in in_obj) {
        return in_obj[search_obj['Category_raw']][return_var];
    } else {
        return 'undefined';
    };
};

var super_category_filter = false;
var category_filter = false;
var start_date_filter = false;
var end_date_filter = false;
var heatmap_active = false

var filter_data = function(data, value, type) {

    // Remove existing layers
    if (map.hasLayer(markersGroup)) {
        markersGroup.clearLayers();
    };
    if (heatmap_active) {
        heat.remove();    
    };

    // Set filter values
    if (type == 'super_category') {
        super_category_filter = value;
    }
    if (type == 'category') {
        category_filter = value;
    }
    if (type == 'date') {
        start_date_filter = value[0];
        end_date_filter = value[1];
    }

    // Declare data containers
    var data_filtered_0 = [];
    var data_filtered_1 = []; 
    var data_filtered_2 = [];

    // Filter super-category
    if (super_category_filter != "All" && super_category_filter) {
        for (var i = 0; i < data.length; i++) {
            if (data[i]['SuperCategory'] == super_category_filter) {
               data_filtered_0.push(data[i]) 
            }
        }
    } else {
        data_filtered_0 = data; 
    }

    // Filter category
    if (category_filter != "All" && category_filter) {
        data_filtered_1 = []
        for (var i = 0; i < data_filtered_0.length; i++) {
            if (data_filtered_0[i]['Category'] == category_filter) {
                data_filtered_1.push(data_filtered_0[i]);
            };
        };
    } else {
        data_filtered_1 = data_filtered_0;
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

    // Draw markers
    if (document.getElementById('btn_points_inp').checked) {
        draw_markers(data_filtered_2);
    }; 
    if (document.getElementById('btn_heatmap_inp').checked) {
        draw_heatmap(data_filtered_2);
    };
    
    return data_filtered_2;

};

//-------------------------
// Build view
//-------------------------

// Add data

$(document).ready(function(){

    d3.csv("./static/data/test_data_2.csv", function(data_daily) {
        d3.csv("./static/data/n_latest.csv", function(data_nxl) {

            header_content = '<p><b>' + moment(data_nxl[0]['date'], "YYYY-MM-DD HH:mm:ss").utcOffset(-480).format("DD-MM-YYYY HH:MM") 
                + '<br />' + data_nxl[0]['priority'] + ': ' + data_nxl[0]['headline'] + '</b><br />' 
                + data_nxl[0]['title'] + ",&nbsp;" + data_nxl[0]['address'] 
                + '<br /><a target="_blank" href="' + 'https://local.nixle.com/' + data_nxl[0]['link'] + '">Read more...</a></p>';
            document.getElementById("latest_warning").innerHTML = header_content;


            d3.csv("./static/data/category_grouping_2.csv", function(data_cats) {

                data = []

                // Parse categories table
                cats_equiv = {};
                risk_categories = [];
                data_cats.forEach(function(d) {
                    row = {}
                    key = d['category'] 
                    value = {}
                    value['category_correct'] = d['category_correct'] 
                    value['risk'] = d['risk']
                    value['super_category'] = d['super_category']
                    value['icon'] = d['icon']
                    cats_equiv[key] = value
                    if (d['has_risk'] == 1) risk_categories.push(d['category'])
                })
                console.log('Risk categories:');
                console.log(risk_categories);

                // Parse data and create data arrays
                data_daily.forEach(function(d) {
                    if (risk_categories.includes(d['Category'])) {
                        d['source'] = 'daily log';
                        d['DateTime'] = moment(d['Date'], "M/D/YYYY HH:mm").utcOffset(-480);
                        d['LatLngArr'] = parseLatLng(d['LatLng']);
                        d['Category_raw'] = d['Category'];
                        d['Risk'] = get_equivalence(d, cats_equiv, 'risk') 
                        d['Icon'] = get_equivalence(d, cats_equiv, 'icon') 
                        d['SuperCategory'] = get_equivalence(d, cats_equiv, 'super_category') 
                        d['Category'] = get_equivalence(d, cats_equiv, 'category_correct') 
                        data.push(d)
                    };
                });

                data_nxl.forEach(function(d) {
                    if (risk_categories.includes(d['title'])) {
                        d['source'] = 'nixle';
                        d['DateTime'] = moment(d['date'], "YYYY-MM-DD HH:mm:ss").utcOffset(-480);
                        d['LatLngArr'] = parseLatLng(d['latlng']);
                        d['Category_raw'] = d['title']
                        d['Risk'] = get_equivalence(d, cats_equiv, 'risk') 
                        d['Icon'] = get_equivalence(d, cats_equiv, 'icon') 
                        d['SuperCategory'] = get_equivalence(d, cats_equiv, 'super_category') 
                        d['Category'] = get_equivalence(d, cats_equiv, 'category_correct') 
                        data.push(d);
                    };
                });
                data_filtered_1 = data;
                data_filtered_2 = data;

                // Draw datasets to console
                console.log('Daily crime log:')
                console.log(data_daily)            
                console.log('Categories equivalences:')
                console.log(cats_equiv)
                console.log('Nixle:')
                console.log(data_nxl)
                console.log("Unified data")
                console.log(data);
                

                // Draw markers
                draw_markers(data);
                // draw_nix_markers(data_nxl);

                // Filter function
                // var category_filter = false;
                // var start_date_filter = false;
                // var end_date_filter = false;
                // var filter_data = function(value, type) {
                //     data_filtered_1 = data; 
                //     if (map.hasLayer(markersGroup)) {
                //         markersGroup.clearLayers();
                //     };
                //     // Set filter values
                //     if (type == 'category') {
                //         category_filter = value;
                //     }
                //     if (type == 'date') {
                //         start_date_filter = value[0];
                //         end_date_filter = value[1];
                //     }
                //     // Filter category
                //     // data_filtered_1 = [];
                //     if (category_filter == "All" || !category_filter) {
                //         data_filtered_1 = data;
                //     } else {
                //         data_filtered_1 = []
                //         for (var i = 0; i < data.length; i++) {
                //             if (data[i]['Category'] == value) data_filtered_1.push(data[i]);
                //         };
                //     };
                //     data_filtered_2 = data_filtered_1;
                //     // Filter date
                //     if (start_date_filter) {
                //         data_filtered_2 = [];
                //         for (var i = 0; i < data_filtered_1.length; i++) {
                //             var record = data_filtered_1[i];
                //             if (start_date_filter <= record['DateTime'] && record['DateTime'] <= end_date_filter) {
                //                 data_filtered_2.push(record);
                //             };
                //         };
                //     };
                //     if (document.getElementById('btn_points_inp').checked) {
                //         draw_markers(data_filtered_2);
                //     }; 
                // };

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
                    timeSeries.data(filter_data(data, [start, end], 'date'));
                    timeSeries.plot();
                    //timeSeries.set_brush(start, end);
                    
                });

                //--------------
                // Crime filter
                //--------------

                // Get unique values 
                var super_categories = ['All'];
                for (var i = 0; i < data.length; i++) {
                    var super_category = data[i]['SuperCategory'];
                    if (super_categories.indexOf(super_category) < 0) {
                        super_categories.push(super_category);
                    };
                };
                var categories = ['All'];
                for (var i = 0; i < data.length; i++) {
                    var category = data[i]['Category'];
                    if (categories.indexOf(category) < 0) {
                        categories.push(category);
                    };
                };

                // Add menus
                d3.select("#divfilter")
                    .append("p")
                    .text("Category")
                    .attr("align", "left")
                    .append("select")
                    .attr("id", "superCategorySelector")
                    .attr('class', 'form-control')
                    .selectAll("option")
                    .data(super_categories.sort())
                    .enter()
                    .append("option")
                    .attr("class", "cat_option")
                    .text(d => capitalizeFirstLetter(d))
                    .attr("value", d => d)
                    .attr("color", "black");
                // d3.select("#divfilter")
                //     .append("p")
                //     .text("Details")
                //     .attr("align", "left")
                //     .append("select")
                //     .attr("id", "crimeSelector")
                //     .attr('class', 'form-control')
                //     .selectAll("option")
                //     .data(categories.sort())
                //     .enter()
                //     .append("option")
                //     .attr("class", "cat_option")
                //     .text(d => capitalizeFirstLetter(d))
                //     .attr("value", d => d)
                //     .attr("color", "black");
                var categories_menu = d3.select("#divfilter")
                                        .append("P")
                                        .text("Details")
                                        .attr("align", "left")
                                        .append("select")
                                        .attr("id", "crimeSelector")
                                        .attr("class", "form-control")
                
                var cat_options = d3.select("#crimeSelector")
                                    .selectAll("option")
                                    .data(categories)
                                    .enter()
                                    .append("option")
                                    .attr("class", "cat_option")
                                    .text(d => capitalizeFirstLetter(d))
                                    .attr("value", d => d)
                                    .attr("color", "black");

                // Filter data based on crime category
                var filter_supercat_val = "All";
                var filter_supercat = function() {
                    filter_supercat_val = d3.select(this).property('value');
                    console.log("Super category selected: " + filter_supercat_val);    

                    if (this.value == 'All') {
                        cats = categories;
                    } else {
                        // Filter options in details menu
                        var cats = ['All'];
                        for (var i = 0; i < data_filtered_2.length; i++) {
                            category = data_filtered_2[i]['Category'];
                            if (data_filtered_2[i]['SuperCategory'] == filter_supercat_val && !cats.includes(category)) {
                                cats.push(data[i]['Category']);
                            }
                        }
                        console.log(cats);
                    };
                    // Update category options
                    var cat_options = d3.select("#crimeSelector")
                        .selectAll("option") 
                        .data(cats)

                    cat_options.exit().remove();

                    cat_options.enter()
                        .append("option")
                        .merge(cat_options)
                        .attr("class", "cat_option")
                        .text(d => capitalizeFirstLetter(d))
                        .attr("value", d => d)
                        .attr("color", "black");

                    timeSeries.plot(filter_data(data, filter_supercat_val, 'super_category'));
                };
                d3.select('#superCategorySelector')
                    .on("change", filter_supercat);

                var filter_cat = function() {
                    filter_cat_val = d3.select(this).property('value');
                    console.log("Category selected: " + filter_cat_val);    
                    timeSeries.plot(filter_data(data, filter_cat_val, 'category'));
                };
                d3.select('#crimeSelector')
                    .on("change", filter_cat);
                var filter_supercat_val = "All";

                var timeSeries = hist();

                timeSeries.callback(function(bounds) {
                    $('#datetimes').data('daterangepicker').setStartDate(bounds[0]);
                    $('#datetimes').data('daterangepicker').setEndDate(bounds[1]);
                    timeSeries.data(filter_data(data, [bounds[0], bounds[1]], 'date'));
                    timeSeries.plot();
                    timeSeries.set_brush();
                });

                timeSeries.data(data);
                timeSeries.plot();


                //--------------
                // Heatmap 
                //--------------

                var show_heatmap = function(_) {
                    if (!document.getElementById('btn_heatmap_inp').checked) {
                        heatmap_active = true;
                        // hm_points = data_filtered_2.map(d => d['LatLngArr']);
                        // heat = L.heatLayer(hm_points);
                        // heat.addTo(map);
						tabulate_data(data_filtered_2);
                        draw_heatmap(data_filtered_2);
                    } else {
                        heatmap_active = false; 
                        heat.remove();
                    }
                }

                var show_points = function(_) {
                    if (!document.getElementById('btn_points_inp').checked) {
                        draw_markers(data_filtered_2);
                    } else {
                        if (map.hasLayer(markersGroup)) {
                            markersGroup.clearLayers();
						    get_visible_data_summary();
                        }
                    }
                }



                d3.select('#btn_heatmap')
                    .on('click', show_heatmap);
                d3.select('#btn_points')
                    .on('click', show_points);

            })
        })
    });

});

var hist = function() {

    // Initialise data structures.s
    var margin = {
        "left": 35,
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

var rdata = [
 [
      {"area": "12am", "value": 13, "show": false}, 
      {"area": "11pm", "value": 10, "show": false}, 
      {"area": "10pm", "value": 11, "show": false}, 
      {"area": "9pm", "value": 13, "show": true}, 
      {"area": "8pm", "value": 5, "show": false}, 
      {"area": "7pm", "value": 8, "show": false}, 
      {"area": "6pm", "value": 6, "show": true}, 
      {"area": "5pm", "value": 5, "show": false}, 
      {"area": "4pm", "value": 2, "show": false}, 
      {"area": "3pm", "value": 3, "show": true}, 
      {"area": "2pm", "value": 5, "show": false}, 
      {"area": "1pm", "value": 4, "show": false}, 
      {"area": "12pm", "value": 13, "show": false},
      {"area": "11am", "value": 5, "show": false}, 
      {"area": "10am", "value": 2, "show": false}, 
      {"area": "9am", "value": 13, "show": true}, 
      {"area": "8am", "value": 5, "show": false}, 
      {"area": "7am", "value": 7, "show": false}, 
      {"area": "6am", "value": 13, "show": true}, 
      {"area": "5am", "value": 10, "show": false}, 
      {"area": "4am", "value": 11, "show": false},
      {"area": "3am", "value": 13, "show": true}, 
      {"area": "2am", "value": 5, "show": false}, 
      {"area": "1am", "value": 2, "show": false}, 
    ]


];



// Config for the Radar chart
var config = {
    w: 170,
    h: 170,
    maxValue: 20,
    levels: 2,
    ExtraWidthX: 60,
    ExtraWidthY: 10,
    factorLegend: 0.45,
    TranslateX: 30,
    TranslateY: 10,
    radius: 2,
    color: d3.scaleOrdinal().range(["#E09E19", "#E09E19"])
}

    var hist, brush;

    var x, width;
    var y, height;

    // Create the binned histogram data and configure scales. 
    var setup_ = function(_) {

        d3.select(window).on('resize', refilter_);

        // Set geometry.
        
		height = parseInt(d3.select('.t_series').style('height')) - 20; //This one has a bug
        width = parseInt(d3.select('.t_series').style('width')) - 20; // This one someone starts before the data loads. 


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
                return d.DateTime.toDate();
            })
            .thresholds(dayBins);


        var bins, use_data;

        // Filter if argument supplied.
        if (!arguments.length || (!_)) {
            use_data = data;
        } else {
            var bounds = _;
            //use_data = data.filter(function(d) {
            //    return (d.dt < bounds[1] && d.dt > bounds[0]);
            //});
            use_data = bounds;
        }


        bins = histogram(use_data);

        y.domain([0, d3.max(bins, function(d) {
            return d.length;
        })]);

        // Make sure bars are full width.
        bins[0].x0 = new Date(bins[0].x0.getFullYear(), bins[0].x0.getMonth(), bins[0].x0.getDate());
        bins[bins.length - 1].x1 = new Date(bins[bins.length - 1].x1.getFullYear(), bins[bins.length - 1].x0.getMonth(), bins[bins.length - 1].x0.getDate(), 23, 59, 59);


        return bins;

    }

    // (Re)plot the axes.
    var axis_ = function() {

        hist.selectAll(".axis").remove();
        hist.selectAll(".bar").remove();
        hist.selectAll(".brush").remove();

        hist.append("g")
            .attr("transform", "translate(0," + String(height - margin.bottom) + ")")
            .attr("class", "axis")
            .call(d3.axisBottom(x));

        hist.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(0,0)")
            .call(d3.axisLeft(y).ticks(2));

        hist.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 10 - margin.left)
            .attr("x", 0 - ((height - margin.bottom) / 2))
            .attr("dy", 0)
            .attr("class", "axis_label axis")
            .style("text-anchor", "middle")
            .text("Cases/Day");

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
                    if(start > 0 && end > 0) {
                        // Convert bounds back to DateTime.
                        callback([x.invert(start), x.invert(end)]);
                    }
                } else {
                    callback();
                }
            });


    }

    // Initialise the bar chart and plot data.
    var plot_ = function(_) {

        bins = setup_(_);
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

        if(x(bins[0].x1) - x(bins[0].x0) > 12) {

            bar.append("text")
                .attr("class", "bar_day")
                .attr("x", function(d) {
                    return (x(d.x1) - x(d.x0) - 1)/2;
                })
                .attr("dy", function(d) {
                        return height - margin.bottom -  y(d.length) - 5;
                    })
                .attr("text-anchor", "middle")
                .text(function(d) { 
                        if(d.length > 0) {
                            return moment(d.x0).format("ddd").substring(0,1);
                        }
                    });

        }

        hist.append("g")
            .attr("class", "brush")
            .call(brush);

    RadarChart.draw("#radarchart", rdata, config);

    }


    // Update the histogram to use filtered data.
    var refilter_ = function(bounds) {
/*
        bins = setup_(bounds);
        axis_();



		try {
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
                


            bar.data(bins).select("text")
            .attr("class", "bar_day")
            .attr("x", function(d) {
                return (x(d.x1) - x(d.x0) - 1)/2;
            })
            .attr("dy", function(d) {
                    return height - margin.bottom -  y(d.length) - 5;
                })
            .attr("text-anchor", "middle")
            .text(function(d) { 
                    if(d.length > 0) { 
                        return moment(d.x0).format("ddd").substring(0,1);
                    }
                });
		}catch (e) {
		}*/

    }

    var set_brush_ = function(_) {

            hist.select_all(".brush").call(brush.move, [
                x(start),
                x(end),
            ]);

    }


    var public = {
        "plot": plot_,
        "data": data_,
        "refilter": refilter_,
        "callback": callback_,
        "set_brush": set_brush_
    };

    return public;

}

map.on("zoomend", get_visible_data_summary)
map.on("moveend", get_visible_data_summary)
