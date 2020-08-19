const Router = require('koa-router');
const log4js = require("log4js");
const router = new Router();
router
    .get('/api/', (ctx, next) => {
        ctx.body = '1111';
    })
    .get('/api/submit', (ctx, next) => {
      logger.info(ctx.query);
      ctx.body = {
          msg:'here is test',
          query:ctx.query,
          queryStr:ctx.querystring,
      }
    })
    .post('/api/users', (ctx, next) => {
        ctx.body = 'here is users';
    })
    .all('/api/users/:id', (ctx, next) => {
        // ...
    });
    

module.exports = router
