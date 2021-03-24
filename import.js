const mongoose = require('./_connection');

// Import seed data
const dbSeed = require(`./seeds/nature.js`);

// Define model
const Nature = require(`./models/nature.js`);

Nature.insertMany(dbSeed, function(error, nature) {
  console.log('Nature Data import completed.')
  mongoose.connection.close();
});