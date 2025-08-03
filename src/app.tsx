import createApp from "@src/lib/create-app"
import baseLayout from "./middlewares/Layout";
import home from "@src/routes/home.route";
import about from "@src/routes/about.route";
import { serveStatic } from "hono/bun";

const app = createApp();
app.use('/static/*', serveStatic({ root: './' }))

app.get('/*', baseLayout)

const routes = [
  home,
  about,
] as const;

routes.forEach((route) => {
  app.route("/", route);
});

export default app
