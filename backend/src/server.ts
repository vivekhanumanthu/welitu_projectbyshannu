import { app } from "./app";
import { env } from "./config/env";
import { connectRedis } from "./config/redis";

connectRedis().finally(() => {
  app.listen(env.port, () => {
    console.log(`API running on http://localhost:${env.port}`);
  });
});
