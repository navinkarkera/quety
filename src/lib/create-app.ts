import { Hono } from 'hono';
import { requestId } from "hono/request-id";
import notFound from '@src/middlewares/not-found';
import serveEmojiFavicon from '../middlewares/serve-emoji-favicon';
import { AppBindings } from './types';
import { pinoLogger } from '@src/middlewares/pino-logger';

export function createRouter() {
  return new Hono<AppBindings>({
    strict: false,
  });
}

export default function createApp() {
  const app = createRouter();
  app.use(requestId())
    .use(serveEmojiFavicon("🇶"))
    .use(pinoLogger());

  app.notFound(notFound);
  return app;
}
