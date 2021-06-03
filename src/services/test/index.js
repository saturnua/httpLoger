const test = async (ctx) => {
  return ctx.body = {
    message : ' 🙈🙈🙈 Hello from test 🙈🙈🙈 ',
    data: Object.keys(ctx.query).length !== 0 ? ctx.query : '🍑🍑🍑 - NO ANY DATA - 🍑🍑🍑'
  };
};
const reportServices = { test };

module.exports = reportServices;
