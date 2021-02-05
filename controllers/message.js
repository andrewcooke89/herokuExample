'use strict';

const models = require('../models/message');

exports.get= (ctx) => {
  try {
    ctx.body = 'Hello from my Heroku deployed server'
    ctx.status = 200;
  } catch (err) {
    ctx.body = err;
    ctx.status = 500;
  }
};

