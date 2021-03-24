const express = require('express')
const router = express.Router()
//const config = require('../config')
//const api = require("./api/v0");
var dayjs = require('dayjs');

// router.use((req, res, next) => {
//   res.locals = config
//   next()
// });

router.get('/', (req, res) => {
  res.render('index', {pageTitle: "Dynamic Gallery" , dayjs})
});

module.exports = router;