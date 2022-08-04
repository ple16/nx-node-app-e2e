import * as Koa from 'koa';
import * as KoaRouter from 'koa-router';

export async function startServer() {
  const port = 3000;
  const server = new Koa();
  const router = new KoaRouter();

  router.use('(.*)');

  router.all('(.*)', async (ctx) => {
    ctx.body = 'Hello World';
  });

  server.use(router.routes());

  server.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}
