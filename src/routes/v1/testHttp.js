const Router = require('@koa/router');

const { testHttpControllers } = require('../../controllers');

const router = new Router({ prefix: '/test' });

router.post('testHttp', '/', testHttpControllers.test);

module.exports = router;
