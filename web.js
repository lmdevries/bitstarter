var express = require('express');
var fs = require('fs');


var app = express.createServer(express.logger());

app.use(express.static('public'));

app.get('/', function(request, response) {
  var myBuffer = fs.readFileSync('./index.html');
  var myString = myBuffer.toString();
  response.send(myString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
