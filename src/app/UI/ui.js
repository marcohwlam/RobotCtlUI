var express = require('express')
  , router = express.Router()
var fs = require('fs')
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(express.static('.'));
var spawn = require('child_process').spawn;
// const ctl = spawn('python', ['./src/app/robotCtl/HBrige.py'], {
//   stdio: [process.stdin, 'pipe', 'pipe']
// });
var ctl;
// process.stdin.pipe(ctl.stdin)

// index
router.get('/', function(req, res) {
    fs.readFile('./src/app/UI/public/index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
});

router.post('/control', function(req,res){
  console.log(req.body);
  // ctl.stdin.write(req.body + "\n");
  // writeToWritable(req.body + "\n")
  res.end();
});



// async function main() {
//   ctl = spawn('python', ['./src/app/robotCtl/HBrige.py'], {
//     stdio: [process.stdin, 'pipe', 'pipe']
//   });
//   console.log('### DONE');
// }
// main();

// ctl.stdout.on('data', function(data){
//   console.log(data.toString());
// });
//
// ctl.stderr.on('data', function(data) {
//     console.log('stdout: ' + data);
// });
//
// ctl.on('error', (err) => {
//   console.log("\n\t\tERROR: spawn failed! (" + err + ")");
// });
//
// ctl.on('exit', (code, signal) => {
//   console.log(code);
//   console.log(signal);
// });

module.exports = router
