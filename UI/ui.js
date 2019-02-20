var express = require('express')
  , router = express.Router()
var fs = require('fs')
var bodyParser = require('body-parser');
// router.use(bodyParser.urlencoded({
//     extended: true
// }));
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.use(express.static('./public'));
// index
router.get('/', function(req, res) {
    fs.readFile('./src/app/home/index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
});

module.exports = router
