import { Router } from "express";
import { z } from "zod";
import { pool } from "../config/db";
import { sendBookingConfirmation } from "../services/email";

const router = Router();

const bookingSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  weddingDate: z.string(),
  location: z.string().min(2),
  estimatedGuests: z.string().or(z.number()),
  budgetRange: z.string().min(2),
  weddingType: z.string().min(2),
  message: z.string().optional()
});

router.post("/", async (req, res) => {
  const parsed = bookingSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ message: "Invalid request" });

  const b = parsed.data;
  const result = await pool.query(
    `INSERT INTO bookings (name, email, phone, wedding_date, location, estimated_guests, budget_range, wedding_type, message)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING id`,
    [
      b.name,
      b.email,
      b.phone,
      b.weddingDate,
      b.location,
      Number(b.estimatedGuests),
      b.budgetRange,
      b.weddingType,
      b.message || null
    ]
  );

  sendBookingConfirmation(b.email, b.name).catch(() => null);
  return res.status(201).json({ id: result.rows[0].id, message: "Booking request created" });
});

router.get("/", async (_req, res) => {
  const result = await pool.query("SELECT * FROM bookings ORDER BY created_at DESC LIMIT 100");
  return res.json(result.rows);
});

export default router;
