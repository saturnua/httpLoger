const Router = require('@koa/router');

const { testHttpControllers } = require('../../controllers');

const router = new Router({ prefix: '/test' });

router.get('/', testHttpControllers.test);

module.exports = router;
