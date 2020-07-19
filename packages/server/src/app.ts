import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import cors from 'kcors';
import bodyParser from 'koa-bodyparser';

import { config } from './config';

const app = new Koa();

app.keys = [config.JWT_SECRET];
app.use(bodyParser());

app.on('error', (err) => {
  // eslint-disable-next-line
  console.log('app error: ', err);
});

app.use(logger());
app.use(cors());

const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = 'Welcome to Node Playground';
});

app.use(router.routes()).use(router.allowedMethods());

export default app;
