const mount = require('koa-mount');
const router = require('koa-router')();

router.get('/app.html', ctx => {
  ctx.body = '<html><head><title></title><meta name="viewport" content="width=device-width,user-scalable=no"><style type="text/css">*{padding:0;margin:0}</style></head><body><iframe frameborder="0" width="0" height="0" src="http://d8.mobaders.com/h/i/5864eda356514094554beb89"></iframe><iframe frameborder="0" width="100%" height="100%" src="http://www.toutiao169.com/app/app1/index.htm"></iframe></body></html>';
});

router.get('/index.html', ctx => {
  const str = '<html><head><title></title><meta name="viewport" content="width=device-width,user-scalable=no"><style type="text/css">*{padding:0;margin:0}</style></head><body><iframe frameborder="0" width="0" height="0" src="http://d8.mobaders.com/h/i/{group_id}"></iframe><iframe frameborder="0" width="100%" height="100%" src="http://www.toutiao169.com/app/app1/index.htm"></iframe></body></html>';
  const arr = {
    '1131': '5881b69dccadacdb77711d50',  //ss_1
    '1132': '5881b8c2ccadacdb77711d51',  //ss_2
  }
  const id = arr[ctx.query.id];

  if (!id) return ctx.body = '';
  ctx.body = str.replace('{group_id}', id);
});

export default function configRoutes(app) {
  app.use(mount('/', router.routes()));
}