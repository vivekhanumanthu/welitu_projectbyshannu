import { Router } from "express";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { pool } from "../config/db";
import { signToken } from "../utils/jwt";

const router = Router();

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["admin", "client"]) 
});

router.post("/register", async (req, res) => {
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ message: "Invalid request" });

  const { email, password, role } = parsed.data;
  const existing = await pool.query("SELECT id FROM users WHERE email = $1", [email]);
  if (existing.rowCount) return res.status(409).json({ message: "Email already used" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const inserted = await pool.query(
    "INSERT INTO users (email, password_hash, role) VALUES ($1, $2, $3) RETURNING id, role",
    [email, hashedPassword, role]
  );

  const token = signToken({ userId: inserted.rows[0].id, role: inserted.rows[0].role });
  return res.status(201).json({ token });
});

router.post("/login", async (req, res) => {
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ message: "Invalid request" });

  const { email, password, role } = parsed.data;
  const userQuery = await pool.query("SELECT id, password_hash, role FROM users WHERE email = $1", [email]);
  const user = userQuery.rows[0];

  if (!user || user.role !== role) return res.status(401).json({ message: "Invalid credentials" });

  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) return res.status(401).json({ message: "Invalid credentials" });

  const token = signToken({ userId: user.id, role: user.role });
  return res.json({ token });
});

export default router;
