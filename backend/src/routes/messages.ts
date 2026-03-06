import { Router } from "express";
import { z } from "zod";
import { pool } from "../config/db";

const router = Router();
const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(5)
});

router.post("/", async (req, res) => {
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ message: "Invalid request" });

  const { name, email, message } = parsed.data;
  await pool.query("INSERT INTO messages (name, email, message) VALUES ($1,$2,$3)", [name, email, message]);
  return res.status(201).json({ message: "Message received" });
});

export default router;
