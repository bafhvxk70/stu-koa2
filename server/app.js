const Koa = require('koa');
const static = require('koa-static');
const app = new Koa();
const router = require('./api/test')
app.use(static(__dirname+'/static'), {
  setHeadears: (res,path,stats) => {
    res.setHeader('Cache-Control','no-cache')
  }
})
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
app.use(router.routes())
app.listen(3000);
