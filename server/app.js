const Koa = require('koa');
const static = require('koa-static');
const app = new Koa();
const router = require('./api/test')


// app.use(static(__dirname+'/static', {
//   maxage: 1110000
// }))
app.use(static(__dirname+'/static'))
// app.use(async (ctx, next) => {
//     const start = Date.now();
//     await next();
//     const ms = Date.now() - start;
//     console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
// });
app.use(router.routes())
app.listen(3000);
