const express = require('express');
const path = require('path');
// const morgan = require('morgan');
const ssr = require('../middleware/ssr');
// const getUser = require('../middleware/getUser');

function config(app) {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(path.join(__dirname, '..', 'public')));
  app.use(ssr);
  //   app.use(getUser);
//   app.use(morgan('dev'));
}
module.exports = config;
