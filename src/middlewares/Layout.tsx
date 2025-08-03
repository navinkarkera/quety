import { jsxRenderer } from "hono/jsx-renderer";
import { Navbar } from "@src/components/Navbar";

const baseLayout = jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light dark" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.fluid.classless.sand.min.css"
        />
        <link rel="stylesheet" href="/static/index.css" />
        <title>{title || "Quety"}</title>
      </head>
      <body>
        <Navbar/>
        <main>
          {children}
        </main>
         <script defer src="https://cdn.jsdelivr.net/npm/htmx.org@2.0.6/dist/htmx.min.js"></script>
      </body>
    </html>
  );
});

export default baseLayout;
