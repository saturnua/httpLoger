const reportServices = require('../../services');

const test = async (ctx) => {
  const data = ctx.request.body;
  ctx.body = await reportServices.test(data);

  ctx.res.statusCode = 200;
};

const userControllers = { test };

module.exports = userControllers;
