import { createServerApp } from "./server";

const server = createServerApp();
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
