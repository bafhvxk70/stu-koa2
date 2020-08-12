const Router = require('koa-router');
const router = new Router();
router
    .get('/api/', (ctx, next) => {
        ctx.body = '雪梅真漂亮，雪梅真可爱!';
    })
    .get('/api/test', (ctx, next) => {
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
