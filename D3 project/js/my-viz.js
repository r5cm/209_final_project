console.log(d3.select(".summary").text());

var w = 200;
var h = 100;

var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
               11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

var xScale = d3.scaleBand()
  .domain(d3.range(dataset.length))
  .rangeRound([0, w])
  .paddingInner(0.05);

var yScale = d3.scaleLinear()
  .domain([0, d3.max(dataset)])
  .range([0, h]);

var svg = d3.select(".filter")
  .append("svg")
  .attr("width", w)
	.attr("height", h);

//Create bars
svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", function(d, i) {
  return xScale(i);
})
  .attr("y", function(d) {
  return h - yScale(d);
})
  .attr("width", xScale.bandwidth())
  .attr("height", function(d) {
  return yScale(d);
})
  .attr("fill", function(d) {
  return "rgb(0, 0, " + Math.round(d * 10) + ")";
});

//Create labels
svg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text(function(d) {
  return d;
})
  .attr("text-anchor", "middle")
  .attr("x", function(d, i) {
  return xScale(i) + xScale.bandwidth() / 2;
})
  .attr("y", function(d) {
  return h - yScale(d) + 14;
})
  .attr("font-family", "sans-serif")
  .attr("font-size", "11px")
  .attr("fill", "white");