'use strict';

const Koa = require('koa');
const app = new Koa();



const router = require('./router');

const PORT = 3000;

app.use(router.routes());

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`); // eslint-disable-line no-console 
});
