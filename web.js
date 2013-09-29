var express = require('express');
var app = express();
app.use(express.logger());
var fs = require('fs');
var buf = new Buffer(25600);
buf.write(buf.toString(fs.readFileSync('index.html','utf-8')));

app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
