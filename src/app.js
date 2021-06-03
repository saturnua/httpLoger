require('dotenv').config();
const Koa = require('koa');
const logger = require('koa-logger')

const bodyParser = require('koa-bodyparser');

const app = new Koa();
app.use(logger());
const router = require('./routes');

app.use(
    bodyParser({
        enableTypes: ['json', 'form', 'text'],
    }),
);

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`app running on port ${port}...`);
});
