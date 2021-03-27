const express = require('express')
const router = express.Router()
//const config = require('../config')
const api = require("./api/v0");
var dayjs = require('dayjs');
const nature = require('../models/nature');
const Nature = require('../models/nature')
// router.use((req, res, next) => {
//   res.locals = config
//   next()
// });

router.get('/', (req, res) => {
  res.render('index', {pageTitle: "Dynamic Gallery" , dayjs})
});
// Definition list route here -> render single item
router.get('/images/:id', async(req, res, next) => {
  try {
    const image = await Nature.findOne({id: req.params.id});
    res.render('single-item', {pageTitle: " Single Image", image, dayjs})
  } catch(err) {
    return next(err);
  }

})
// Definition item route here -> render definition-item.ejs
/* router.get('/nature/:img', (req, res) => {
  const definition = definitions.find(function(item) {
    // true -> returns `item`
    // false -> moves to the next `item`
    // if they're all false -> returns `undefined`
    return item.img === req.params.img
  })
  if (!nature) {
    res.sendStatus(404)
  }
  res.render('single-item' {
    pageTitle: nature.term,
    siteTitle: nature,
  }) */

router.use('/api/v0/', api);

module.exports = router;