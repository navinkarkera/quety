import { createRouter } from "@src/lib/create-app";

const Home = () => {
  return (
    <hgroup>
      <h2>Handle Queue like a pro</h2>
      <p>Take care of your customers time</p>
    </hgroup>
  );
}

const router = createRouter()

router.get("/", (c) => {
  return c.render(<Home />);
});

export default router;
