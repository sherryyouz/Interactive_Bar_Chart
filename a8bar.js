var padding = {top: 50, right: 300, bottom: 50, left: 100}
, width = 800
, height = 600;

var svg = d3.select("#bar").append("svg")
.attr('width', width + padding.left + padding.right)
.attr('height', height + padding.top + padding.bottom)
.style("background-color", "#FEEDE3")
.append('g')
.attr('transform', 'translate(' + padding.left + ', ' + padding.top + ')');

var x = d3.scaleBand();  //x scale
var y = d3.scaleLinear();  //y scale

function get_color(c) {
return "rgb(255," + (280 - (Math.round(c * 30 - 1200))) + ",45)";
};


var jsdata = "LaborWomen.json"
d3.json(jsdata, function(dataset) {
resetLinks("#name");

var status
drawBars()

d3.select("#name")
.on("click", function () {
  resetLinks("#name");
  status = 0

  x.domain(dataset.sort(
      function (a, b) { return a["Country"] > b["Country"]; }
  ).map(function (d) { return d["Country"]; }));  
  
  transitionBars();
});

d3.select("#low")
.on("click", function () {
  resetLinks("#low");
  status = 1
  x.domain(dataset.sort(
      function (a, b) { return a["Labor_2016"] - b["Labor_2016"]; }
  ).map(function (d) { return d["Country"]; }));  
  
  transitionBars();
});

d3.select("#high")
.on("click", function () {
  resetLinks("#high");
  status = 2

  x.domain(dataset.sort(
      function (a, b) { return b["Labor_2016"] - a["Labor_2016"]; }
  ).map(function (d) { return d["Country"]; }));  
  
  transitionBars();
});

d3.select("#top")
.on("click", function () {


d3.json(jsdata, function(d) {

dataset = d.sort(
        function (a, b) { return b["Labor_2016"] - a["Labor_2016"]; }
    ).slice(0,5);

if (status === 2){
  dataset = dataset.sort(
        function (a, b) { return b["Labor_2016"] - a["Labor_2016"]; }
    );
} else if( status == 1){
  dataset = dataset.sort(
        function (a, b) { return a["Labor_2016"] - b["Labor_2016"]; }
    );
} else {
  dataset = dataset.sort(
        function (a, b) { return a["Country"] > b["Country"]; }
    );
}


x.domain(dataset.map(function (d) { return d["Country"]; }));

// DATA JOIN.
var bars = svg.selectAll(".bar")
    .data(dataset, function (d) { return d["Country"]; });

var delay = function (d, i) { return i * 200; };

// EXIT.
bars.exit()
    .transition()
    .duration(500)
    .remove();

// DATA JOIN.
var planet = svg.selectAll(".planet_label")
    .data(dataset, function (d) { return d["Country"]; });


// UPDATE.
bars.transition()
    .duration(750)
    .delay(delay)
    .attr("x", function (d) { return x(d["Country"]); })
    .attr("width", x.bandwidth());

// ENTER.
bars.enter().append("rect")
    .attr("class", "bar")
    .attr("x", function (d) { return x(d["Country"]); })
    .attr("y", function (d) { return y(d["Labor_2016"]); })
    .attr("width", x.bandwidth())
    .attr("fill", d=>get_color(d["Labor_2016"]))
    .attr("height", function (d) { return height - y(d["Labor_2016"]); });

// UPDATE.    
planet.transition()
    .duration(750)
    .delay(delay)
    .attr("x", function (d, i) { return x(d["Country"]) + x.bandwidth() / 2; });

// ENTER.
planet.enter().append("text")
    .text(function (d) { return d["Country"]; })
    .attr("class", "planet_label")
    .attr("x", function (d) { return x(d["Country"]) + x.bandwidth() / 2; })
    .attr("y", function (d) { return height+15; });

// EXIT.    
planet.exit()
    .transition()
    .duration(500)
    .remove();
});
});

d3.select("#bottom")
.on("click", function () {


d3.json(jsdata, function(d) {

dataset = d.sort(
        function (a, b) { return a["Labor_2016"] - b["Labor_2016"]; }
    ).slice(0,5);
if (status === 2){
  dataset = dataset.sort(
        function (a, b) { return b["Labor_2016"] - a["Labor_2016"]; }
    );
} else if( status == 1){
  dataset = dataset.sort(
        function (a, b) { return a["Labor_2016"] - b["Labor_2016"]; }
    );
} else {
  dataset = dataset.sort(
        function (a, b) { return a["Country"] > b["Country"]; }
    );
}
x.domain(dataset.map(function (d) { return d["Country"]; }));

// DATA JOIN.
var bars = svg.selectAll(".bar")
  .data(dataset, function (d) { return d["Country"]; });

var delay = function (d, i) { return i * 200; };

// EXIT.
bars.exit()
  .transition()
  .duration(500)
  .remove();

// DATA JOIN.
var planet = svg.selectAll(".planet_label")
  .data(dataset, function (d) { return d["Country"]; });

// UPDATE.
bars.transition()
  .duration(750)
  .delay(delay)
  .attr("x", function (d) { return x(d["Country"]); })
  .attr("width", x.bandwidth());

// ENTER.
bars.enter().append("rect")
  .attr("class", "bar")
  .attr("x", function (d) { return x(d["Country"]); })
  .attr("y", function (d) { return y(d["Labor_2016"]); })
  .attr("width", x.bandwidth())
  .attr("fill", d=>get_color(d["Labor_2016"]))
  .attr("height", function (d) { return height - y(d["Labor_2016"]); });


// UPDATE.    
planet.transition()
  .duration(750)
  .delay(delay)
  .attr("x", function (d, i) { return x(d["Country"]) + x.bandwidth() / 2; });

// ENTER.
planet.enter().append("text")
  .text(function (d) { return d["Country"]; })
  .attr("class", "planet_label")
  .attr("x", function (d) { return x(d["Country"]) + x.bandwidth() / 2; })
  .attr("y", function (d) { return height+15; });

// EXIT.    
planet.exit()
  .transition()
  .duration(500)
  .remove();
});
});

d3.select("#all")
.on("click", function () {

d3.json(jsdata, function(temp_data) {

dataset = temp_data;
if (status === 2){
  dataset = dataset.sort(
        function (a, b) { return b["Labor_2016"] - a["Labor_2016"]; }
    );
} else if( status == 1){
  dataset = dataset.sort(
        function (a, b) { return a["Labor_2016"] - b["Labor_2016"]; }
    );
} else {
  dataset = dataset.sort(
        function (a, b) { return a["Country"] > b["Country"]; }
    );
}
x.domain(dataset.map(function (d) { return d["Country"]; }));

// DATA JOIN.
var bars = svg.selectAll(".bar")
  .data(dataset, function (d) { return d["Country"]; });

var delay = function (d, i) { return i * 200; };


// EXIT.
bars.exit()
  .transition()
  .duration(500)
  .remove();

// DATA JOIN.
var planet = svg.selectAll(".planet_label")
  .data(dataset, function (d) { return d["Country"]; });
bars.transition()
  .duration(750)
  .delay(delay)
  .attr("x", function (d) { return x(d["Country"]); })
  .attr("width", x.bandwidth());

// ENTER.
bars.enter().append("rect")
  .attr("class", "bar")
  .attr("x", function (d) { return x(d["Country"]); })
  .attr("y", function (d) { return y(d["Labor_2016"]); })
  .attr("width", x.bandwidth())
  .attr("fill", d=>get_color(d["Labor_2016"]))
  .attr("height", function (d) { return height - y(d["Labor_2016"]); });

// UPDATE.    
planet.transition()
  .duration(750)
  .delay(delay)
  .attr("x", function (d, i) { return x(d["Country"]) + x.bandwidth() / 2; });

// ENTER.
planet.enter().append("text")
  .text(function (d) { return d["Country"]; })
  .attr("class", "planet_label")
  .attr("x", function (d) { return x(d["Country"]) + x.bandwidth() / 2; })
  .attr("y", function (d) { return height+15; });

// EXIT.    
planet.exit()
  .transition()
  .duration(500)
  .remove();
});
});

function resetLinks(id) {
d3.select("#low").style('background-color', '#F1750F');
d3.select("#high").style('background-color', "#F1750F");
d3.select("#name").style('background-color', "#F1750F");
d3.select(id).style('background-color', 'lightsalmon');
}

function transitionBars() {

var transition = svg.transition()
  .duration(750);

var delay = function (d, i) {return i * 200;};

transition.selectAll(".bar")
  .delay(delay)
  .attr("x", function (d) {
      return x(d["Country"]);
  });

transition.selectAll(".planet_label")
  .delay(delay)
  .attr("x", function (d) {
      return x(d["Country"]) + x.bandwidth() / 2;
  });
}

//Create the bar chart
function drawBars() {

x.domain(dataset.map(function (d) { return d["Country"]; })) 
  .round(true)  
  .range([0, width])
  .paddingInner(0.05);

y.domain([40, 50])
  .range([height, 0]);

svg.selectAll(".bar")
  .data(dataset, function (d) { return d["Country"]; })
  .enter().append("rect")
  .attr("class", "bar")
  .attr("x", function (d) { return x(d["Country"]); })
  .attr("y", function (d) { return y(d["Labor_2016"]); })
  .attr("width", x.bandwidth())
  .attr("fill", d=>get_color(d["Labor_2016"]))
  .attr("height", function (d) { return height - y(d["Labor_2016"]); });

svg.selectAll(".planet_label")
  .data(dataset, function (d) { return d["Country"]; })
  .enter().append("text")
  .text(function (d) { return d["Country"]; })
  .attr("class", "planet_label")
  .attr("x", function (d) { return x(d["Country"]) + x.bandwidth() / 2; })
  .attr("y", function (d) { return height+15; });


var xAxis;
xAxis = d3.axisBottom()
  .scale(x)
  .tickFormat('');

svg.append("g")
  .attr("class", "axis")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis);

svg.append("text")
  .attr("class", "label")
  .attr("font-weight", "bold")
  .text("Developed Countries")
  .attr("x", width / 2 - 50)
  .attr("y", height + 40);

var yAxis = d3.axisLeft()
  .scale(y)
  .ticks(5, '.0f');

svg.append("g")
  .attr("class", "axis")
  .call(yAxis);

svg.append("text")
.attr("transform", "rotate(-90)")
.attr("y", 0 - padding.left + 10)
.attr("x",0 - (height / 2))
.attr("dy", "1em")
.attr("font-weight", "bold")
.style("text-anchor", "middle")
.text("Women Labor Force (% to Total)"); 

var legend = svg.selectAll(".legend")
  .data(dataset)
  .enter().append("g")
  .attr("class", "legend")
  .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

// color legend
legend.append("rect")
  .attr("x", width +50)
  .attr("y", 20)
  .attr("width", 20)
  .attr("height", 20)
  .style("fill", d=>get_color(d["Labor_2016"]));

// legend label
legend.append("text")
  .attr("x", width + 80)
  .attr("y", 30)
  .attr("dy", ".30em")
  .style("text-anchor", "start")
  .text(function(d) { return d["Country"] + " (" + d["Labor_2016"] + "%)";});

}

svg.append("text")
.text("Color Legend")
.attr("font-weight", "bold")
.attr("x", width + 50)
.attr("y", 4);

});