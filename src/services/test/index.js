const test = async (ctx) => {
  return ctx.body = {
    message : ' 🙈🙈🙈 Hello from test 🙈🙈🙈 ',
    data: ctx.query
  };
};
const reportServices = { test };

module.exports = reportServices;
