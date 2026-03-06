import Redis from "ioredis";
import { env } from "./env";

export const redis = env.redisUrl
  ? new Redis(env.redisUrl, { lazyConnect: true, maxRetriesPerRequest: 2 })
  : null;

export async function connectRedis() {
  if (!redis) return;
  try {
    await redis.connect();
  } catch {
    console.warn("Redis unavailable. Continuing without cache.");
  }
}
