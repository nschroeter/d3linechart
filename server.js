function onRequest(request, response) {
    response.writeHead(200, {"Context-Type" : "application/json"});
    var timeSeries = createTimeSeries();
    var json = JSON.stringify(timeSeries);
    response.write(json);
    response.end();
}

function createTimeSeries() {
    var data = [];
    
    var yourDate = new Date();
    
    for(var i = 0; i < 10; ++i) {
        var sample = {
            timestamp : new Date(yourDate.getFullYear(), yourDate.getMonth() - i, 1).getTime(),
            value : Math.floor(Math.random() * 100) + 1
        }
        data.push(sample);
    }
    
    var timeSeries = {
        data : data
    }
    
    return timeSeries;
}

var http = require('http');
var port = 8888;

http.createServer(onRequest).listen(port);
console.log("Server listening on port " + port);