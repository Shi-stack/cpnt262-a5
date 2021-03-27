const express = require('express');

const router = express.Router();
const Nature = require('../../models/nature')

//const galleryJSON = require('../../data/gallery');
// Export as a function so we can pass it args

router.get('/images', async (req, res, next) => {
  // render calls the view engine
  // looks for the page at the path, passes variable pageTitle
  const gallery = await Nature.find({});
  res.json(gallery);
});

module.exports = router;