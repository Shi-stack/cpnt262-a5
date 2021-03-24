const mongoose = require('mongoose');
const gallerySchema = new mongoose.Schema(
  {
    id: Number,
    title: String,
    description: String,
    width: Number,
    height: Number,
    pathURL: String,
    linkURL: String,
    photoCredit:String,
    creditURL:String,
  }
);
module.exports = mongoose.model('Nature', gallerySchema);