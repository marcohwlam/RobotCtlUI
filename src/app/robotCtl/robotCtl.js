var express = require('express')
  , router = express.Router()
var fs = require('fs')
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var spawn = require('child_process').spawn,
ctl = spawn('python', ['./src/app/robotCtl/HBrige.py']),

// index
router.get('/', function(req, res) {
  ctl.stdin.write(JSON.stringify(data));
  ctl.stdin.end();
});

module.exports = router


// /*Here we are saying that every time our node application receives data from the python process output stream(on 'data'), we want to convert that received data into a string and append it to the overall dataString.*/
// py.stdout.on('data', function(data){
//   dataString += data.toString();
// });
//
// /*Once the stream is done (on 'end') we want to simply log the received data to the console.*/
// py.stdout.on('end', function(){
//   console.log('Sum of numbers=',dataString);
// });
