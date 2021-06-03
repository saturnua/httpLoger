const test = async (ctx) => {
  return ctx.body = {message : ' 🙈🙈🙈 Hello from test 🙈🙈🙈 '};
};
const reportServices = { test };

module.exports = reportServices;
