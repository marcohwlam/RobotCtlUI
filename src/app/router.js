var express = require('express')
  , router = express.Router()

router.use('/UI', require('./UI/ui'))
// router.use('/ctl', require('./robotCtl/ctl'))

module.exports = router
