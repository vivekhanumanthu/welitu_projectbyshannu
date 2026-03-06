import { Router } from "express";
import { pool } from "../config/db";
import { requireAuth, requireRole } from "../middleware/auth";

const router = Router();

router.use(requireAuth, requireRole("admin"));

router.get("/stats", async (_req, res) => {
  const [bookings, upcoming, messages] = await Promise.all([
    pool.query("SELECT COUNT(*)::int AS total FROM bookings"),
    pool.query("SELECT COUNT(*)::int AS total FROM bookings WHERE wedding_date >= CURRENT_DATE"),
    pool.query("SELECT COUNT(*)::int AS total FROM messages")
  ]);

  const totalBookings = bookings.rows[0].total;
  const upcomingWeddings = upcoming.rows[0].total;
  const clientMessages = messages.rows[0].total;
  const revenueEstimate = totalBookings * 1200000;

  return res.json({ totalBookings, upcomingWeddings, revenueEstimate, clientMessages });
});

router.get("/bookings", async (_req, res) => {
  const result = await pool.query("SELECT * FROM bookings ORDER BY created_at DESC");
  return res.json(result.rows);
});

router.get("/messages", async (_req, res) => {
  const result = await pool.query("SELECT * FROM messages ORDER BY created_at DESC");
  return res.json(result.rows);
});

router.post("/blog", async (req, res) => {
  const { title, slug, excerpt, content, coverImage } = req.body;
  if (!title || !slug || !content) return res.status(400).json({ message: "Invalid payload" });

  await pool.query(
    "INSERT INTO blog_posts (title, slug, excerpt, content, cover_image, published_at) VALUES ($1,$2,$3,$4,$5,CURRENT_DATE)",
    [title, slug, excerpt || null, content, coverImage || null]
  );
  return res.status(201).json({ message: "Blog post created" });
});

export default router;
