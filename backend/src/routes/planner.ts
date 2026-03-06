import { Router } from "express";
import { pool } from "../config/db";
import { requireAuth } from "../middleware/auth";

const router = Router();
router.use(requireAuth);

router.get("/vendors", async (_req, res) => {
  const result = await pool.query("SELECT * FROM vendor_marketplace ORDER BY category, name");
  res.json(result.rows);
});

router.get("/mood-board", async (req, res) => {
  const result = await pool.query("SELECT * FROM mood_boards WHERE user_id = $1 ORDER BY created_at DESC", [req.user?.userId]);
  res.json(result.rows);
});

router.post("/mood-board", async (req, res) => {
  const { title, items } = req.body as { title?: string; items?: string[] };
  if (!title) return res.status(400).json({ message: "Title required" });

  const result = await pool.query(
    "INSERT INTO mood_boards (user_id, title, items) VALUES ($1,$2,$3) RETURNING *",
    [req.user?.userId, title, items || []]
  );
  res.status(201).json(result.rows[0]);
});

router.get("/timeline", async (req, res) => {
  const result = await pool.query("SELECT * FROM event_timelines WHERE user_id = $1 ORDER BY event_date ASC", [req.user?.userId]);
  res.json(result.rows);
});

router.post("/timeline", async (req, res) => {
  const { title, eventDate, notes } = req.body as { title?: string; eventDate?: string; notes?: string };
  if (!title || !eventDate) return res.status(400).json({ message: "Invalid payload" });

  const result = await pool.query(
    "INSERT INTO event_timelines (user_id, title, event_date, notes) VALUES ($1,$2,$3,$4) RETURNING *",
    [req.user?.userId, title, eventDate, notes || null]
  );
  res.status(201).json(result.rows[0]);
});

router.get("/guests", async (req, res) => {
  const result = await pool.query("SELECT * FROM guest_lists WHERE user_id = $1 ORDER BY created_at DESC", [req.user?.userId]);
  res.json(result.rows);
});

router.post("/guests", async (req, res) => {
  const { name, phone, status } = req.body as { name?: string; phone?: string; status?: string };
  if (!name) return res.status(400).json({ message: "Name required" });

  const result = await pool.query(
    "INSERT INTO guest_lists (user_id, name, phone, status) VALUES ($1,$2,$3,$4) RETURNING *",
    [req.user?.userId, name, phone || null, status || "invited"]
  );
  res.status(201).json(result.rows[0]);
});

export default router;
