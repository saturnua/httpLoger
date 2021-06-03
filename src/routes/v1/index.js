const Router = require('@koa/router');

const reportRouter = require('./testHttp');

const router = new Router({ prefix: '/v1' });

router.use(reportRouter.routes());

module.exports = router;
