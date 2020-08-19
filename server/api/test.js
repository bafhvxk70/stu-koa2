const Router = require('koa-router');
const log4js = require("log4js");
const router = new Router();
log4js.configure({
  appenders: { cheese: { type: "file", filename: "cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "error" } }
});

const logger = log4js.getLogger("cheese");
router
    .get('/list/', (ctx, next) => {
        ctx.body = '1111';
    })
    .get('/list/submit', (ctx, next) => {
      logger.info(ctx.query);
      ctx.body = {
          msg:'here is test',
          query:ctx.query,
          queryStr:ctx.querystring,
      }
    })
    .post('/list/users', (ctx, next) => {
        ctx.body = 'here is users';
    })
    .all('/list/users/:id', (ctx, next) => {
        // ...
    });
    

module.exports = router
