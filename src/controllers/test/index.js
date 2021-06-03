const reportServices = require('../../services');

const test = async (ctx) => {
  ctx.body = await reportServices.test(ctx);

  ctx.res.statusCode = 200;
};

const userControllers = { test };

module.exports = userControllers;
