const mongoose = require('./_connection');
const dotenv = require('dotenv').config();
const path = require('path');
const express = require('express');
//const api = require('./routes/api/v0');
const routes = require('./routes');
const app = express();
app.set('view engine','ejs');

app.use(express.static('./public'));
//app.use('/api/v0', api);

app.use("/", (req, res, next) => {
  res.locals.siteTitle = "Roshiv";
  next();
});

app.use('/', routes);

app.use((req, res) => {
  res.sendStatus(404);
  res.redirect('/404.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
  console.log('Listening on port: ' + PORT)
});