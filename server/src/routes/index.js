import { Router } from "express";
import Contact from "../models/Contact.js";
import Event from "../models/Event.js";
import Testimonial from "../models/Testimonial.js";
import Blog from "../models/Blog.js";
import GalleryImage from "../models/GalleryImage.js";
import JobOffer from "../models/JobOffer.js";
import JobApplication from "../models/JobApplication.js";
import { upload } from "../config/upload.js";

const router = Router();

export const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

// ================= CONTACT / DEVIS =================
router.post(
  "/contacts",
  asyncHandler(async (req, res) => {
    const { name, email, phone, type, date, guests, message, budget } =
      req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ success: false, error: "name, email et message sont requis" });
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      type,
      date,
      guests,
      message,
      budget,
    });

    return res.status(201).json({
      success: true,
      data: { id: contact._id },
      message: "Votre demande de devis a bien été enregistrée.",
    });
  })
);

router.get(
  "/contacts",
  asyncHandler(async (_req, res) => {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return res.json({ success: true, data: contacts });
  })
);

// ================= ÉVÉNEMENTS / RÉALISATIONS =================
router.get(
  "/events",
  asyncHandler(async (_req, res) => {
    const events = await Event.find()
      .sort({ featured: -1, date: -1 })
      .limit(20);
    return res.json({ success: true, data: events });
  })
);

router.post(
  "/events",
  asyncHandler(async (req, res) => {
    const event = await Event.create(req.body);
    return res.status(201).json({ success: true, data: event });
  })
);

// ================= TÉMOIGNAGES =================
router.get(
  "/testimonials",
  asyncHandler(async (_req, res) => {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    return res.json({ success: true, data: testimonials });
  })
);

router.post(
  "/testimonials",
  asyncHandler(async (req, res) => {
    const testimonial = await Testimonial.create(req.body);
    return res.status(201).json({ success: true, data: testimonial });
  })
);

// ================= GALERIE =================
router.get(
  "/gallery",
  asyncHandler(async (req, res) => {
    const filter = {};
    if (req.query.category && req.query.category !== "tout") {
      filter.category = req.query.category;
    }
    const images = await GalleryImage.find(filter).sort({ sort: 1 });
    return res.json({ success: true, data: images });
  })
);

router.post(
  "/gallery",
  asyncHandler(async (req, res) => {
    const image = await GalleryImage.create(req.body);
    return res.status(201).json({ success: true, data: image });
  })
);

// ================= BLOG =================
router.get(
  "/blog",
  asyncHandler(async (req, res) => {
    const filter = { published: true };
    if (req.query.category && req.query.category !== "tout") {
      filter.category = req.query.category;
    }
    const posts = await Blog.find(filter).sort({ date: -1 }).limit(30);
    return res.json({ success: true, data: posts });
  })
);

router.get(
  "/blog/:slug",
  asyncHandler(async (req, res) => {
    const post = await Blog.findOne({ slug: req.params.slug, published: true });
    if (!post) {
      return res
        .status(404)
        .json({ success: false, error: "Article introuvable" });
    }
    return res.json({ success: true, data: post });
  })
);

router.post(
  "/blog",
  asyncHandler(async (req, res) => {
    const post = await Blog.create(req.body);
    return res.status(201).json({ success: true, data: post });
  })
);

// ================= RECRUTEMENT =================
router.get(
  "/jobs",
  asyncHandler(async (_req, res) => {
    const jobs = await JobOffer.find({ active: true }).sort({ createdAt: -1 });
    return res.json({ success: true, data: jobs });
  })
);

router.post(
  "/jobs",
  asyncHandler(async (req, res) => {
    const job = await JobOffer.create(req.body);
    return res.status(201).json({ success: true, data: job });
  })
);

router.get(
  "/applications",
  asyncHandler(async (_req, res) => {
    const apps = await JobApplication.find().sort({ createdAt: -1 });
    return res.json({ success: true, data: apps });
  })
);

router.post(
  "/applications",
  upload.single("cv"),
  asyncHandler(async (req, res) => {
    const { name, email, phone, position, message } = req.body;

    if (!name || !email) {
      return res
        .status(400)
        .json({ success: false, error: "name et email sont requis" });
    }

    const application = await JobApplication.create({
      name,
      email,
      phone,
      position,
      message,
      cvUrl: req.file ? `/uploads/${req.file.filename}` : "",
      cvName: req.file ? req.file.originalname : "",
    });

    return res.status(201).json({
      success: true,
      data: { id: application._id },
      message: "Candidature enregistrée.",
    });
  })
);

export default router;
