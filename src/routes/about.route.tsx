import { createRouter } from "@src/lib/create-app";

const About = () => {
  return (
    <hgroup>
      <h2>About</h2>
      <p>Take care of your customers time</p>
    </hgroup>
  );
}

const router = createRouter()

router.get("/about", (c) => {
  return c.render(<About />);
});

export default router;
