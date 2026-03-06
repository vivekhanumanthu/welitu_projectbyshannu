import { Router } from "express";
import { cloudinary } from "../config/cloudinary";
import { requireAuth, requireRole } from "../middleware/auth";

const router = Router();

router.post("/image", requireAuth, requireRole("admin"), async (req, res) => {
  const { dataUri, folder } = req.body as { dataUri?: string; folder?: string };
  if (!dataUri) return res.status(400).json({ message: "Missing image data" });

  const upload = await cloudinary.uploader.upload(dataUri, {
    folder: folder || "welityou/gallery"
  });

  return res.status(201).json({ secureUrl: upload.secure_url, publicId: upload.public_id });
});

export default router;
