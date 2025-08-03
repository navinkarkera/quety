import type { NotFoundHandler } from "hono";

const NotFoundComponent = () => {
  return (
    <h2>Page not found</h2>
  );
}

const notFound: NotFoundHandler = (c) => {
  return c.html(<NotFoundComponent />);
};

export default notFound;
