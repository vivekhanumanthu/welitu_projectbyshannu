import { Router } from "express";
import { pool } from "../config/db";
import { redis } from "../config/redis";

const router = Router();

async function fromCacheOrDb<T>(cacheKey: string, query: string): Promise<T[]> {
  if (redis?.status === "ready") {
    const cached = await redis.get(cacheKey);
    if (cached) return JSON.parse(cached) as T[];
  }

  const result = await pool.query(query);
  if (redis?.status === "ready") {
    await redis.set(cacheKey, JSON.stringify(result.rows), "EX", 300);
  }

  return result.rows as T[];
}

router.get("/services", async (_req, res) => {
  const rows = await fromCacheOrDb("services", "SELECT * FROM services ORDER BY title ASC");
  res.json(rows);
});

router.get("/packages", async (_req, res) => {
  const rows = await fromCacheOrDb("packages", "SELECT * FROM packages ORDER BY id ASC");
  res.json(rows);
});

router.get("/gallery", async (_req, res) => {
  const rows = await fromCacheOrDb("gallery", "SELECT * FROM gallery_items ORDER BY id DESC");
  res.json(rows);
});

router.get("/blog", async (_req, res) => {
  const rows = await fromCacheOrDb("blog", "SELECT slug, title, excerpt, cover_image, published_at FROM blog_posts ORDER BY published_at DESC");
  res.json(rows);
});

export default router;
