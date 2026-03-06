import { Router } from "express";
import authRoutes from "./auth";
import bookingRoutes from "./bookings";
import messageRoutes from "./messages";
import contentRoutes from "./content";
import adminRoutes from "./admin";
import uploadRoutes from "./uploads";
import plannerRoutes from "./planner";

const router = Router();

router.get("/health", (_req, res) => res.json({ ok: true }));
router.use("/auth", authRoutes);
router.use("/bookings", bookingRoutes);
router.use("/messages", messageRoutes);
router.use("/content", contentRoutes);
router.use("/admin", adminRoutes);
router.use("/uploads", uploadRoutes);
router.use("/planner", plannerRoutes);

export default router;
