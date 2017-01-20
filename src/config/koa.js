const convert = require('koa-convert');
const cors = require('koa-cors');
const userAgent = require('koa-useragent');

export default function configKoa(app) {
  app.on('error', err => console.error(err));
}