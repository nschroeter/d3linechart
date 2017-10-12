define('d3linechart',['d3'], function (d3) {

    return function(instanceData) {
        var margin = {
            top: 30,
            right: 20,
            bottom: 30,
            left: 50
        };
        
        var width = 600 - margin.left - margin.right;
        var height = 270 - margin.top - margin.bottom;

        var parseDate = d3.time.format("%d-%b-%y").parse;
                
        var x = d3.time.scale()
            .range([0, width]);
        
        var y = d3.scale.linear()
            .range([height, 0]);

        var xAxis = d3.svg.axis().scale(x)
            .orient("bottom").ticks(5);

        var yAxis = d3.svg.axis().scale(y)
            .orient("left").ticks(5);

        var valueline = d3.svg.line()
            .x(function (d) {
                return x(d.timestamp);
            })
            .y(function (d) {
                return y(d.value);
            });

        var svg = d3.select("#" + instanceData.id).insert("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var data = instanceData.series[0];
                
        data.forEach(function (d) {
            d.timestamp = new Date(d.timestamp);
            d.value = +d.value;
        });
                
        x.domain(d3.extent(data, function (d) {
            return d.timestamp;
        }));
                
        y.domain([0, d3.max(data, function (d) {
            return d.value;
        })]);

                
        svg.append("path")
            .attr("d", valueline(data));

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis); 

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);
    };
        
});

