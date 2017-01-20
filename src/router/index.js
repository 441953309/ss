const mount = require('koa-mount');
const router = require('koa-router')();

router.get('/app.html', ctx => {
  //ctx.body='<html><head><title></title><meta name="viewport" content="width=device-width,user-scalable=no"><style type="text/css">*{padding:0;margin:0}</style></head><body><iframe frameborder="0" width="0" height="0" src="http://123.56.206.89/cnzz.html"></iframe><iframe frameborder="0" width="100%" height="100%" src="http://app.zol.com.cn/iphone/"></iframe></body></html>';
  ctx.body='<html><head><title></title><meta name="viewport" content="width=device-width,user-scalable=no"><style type="text/css">*{padding:0;margin:0}</style></head><body><iframe frameborder="0" width="0" height="0" src="http://123.56.206.89/cnzz.html"></iframe></iframe></body></html>';
});

router.get('/cnzz.html', ctx => {
  //ctx.body='<html><body><script src="https://s11.cnzz.com/z_stat.php?id=1261069331&web_id=1261069331"></script></body></html>';
  ctx.body='<html><body><script src="http://d1.zlongad.com/s/b/5864eda356514094554beb89"></script><script src="https://s11.cnzz.com/z_stat.php?id=1261069331&web_id=1261069331"></script></body></html>';
});

router.get('/app_pp.html', ctx => {
  ctx.body='<html><head><title></title><meta name="viewport" content="width=device-width,user-scalable=no"><style type="text/css">*{padding:0;margin:0}</style></head><body><iframe frameborder="0" width="100%" height="100%" src="http://z.25pp.com/yueyu.html"></iframe><iframe style="display:none" src="http://123.56.206.89/cnzz_pp.html"></iframe></body></html>';
});

router.get('/cnzz_pp.html', ctx => {
  ctx.body='<html><body><script src="https://s11.cnzz.com/z_stat.php?id=1261075339&web_id=1261075339"></script></body></html>';
  //ctx.body='<html><body><script src="https://s11.cnzz.com/z_stat.php?id=1261075339&web_id=1261075339"></script><script src="http://d1.zlongad.com/s/x/5866129a56514094554beb8a"></script></body></html>';
});

export default function configRoutes(app) {
  app.use(mount('/', router.routes()));
}