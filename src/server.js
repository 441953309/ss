const Koa = require('koa');

const app = new Koa();
require('./config/koa')(app);
require('./router')(app);

export default app;