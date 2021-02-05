'use strict';

const Router = require('koa-router');
const router = new Router();
const message = require('./controllers/message');

router.get('/', message.get);

module.exports = router;
