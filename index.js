// var manager = require('nipplejs');
var express = require('express');
var app = express();

var http = require('http'),
    fs = require('fs');

app.use('/', express.static(__dirname + '/'));
app.get('/', function (req, res) {
  fs.readFile('./index.html', function (err, html) {
      if (err) throw err;
      res.writeHeader(200, {"Content-Type": "text/html"});
      res.write(html);
      res.end();
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
