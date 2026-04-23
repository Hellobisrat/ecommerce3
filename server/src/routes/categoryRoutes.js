import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { adminOnly } from "../middlewares/adminMiddleware.js";
import {
  createCategory,
  getCategories,
  getCategoryProducts,
} from "../controllers/categoryController.js";

const router = express.Router();

router.post("/", protect, adminOnly, createCategory);
router.get("/", getCategories);
router.get("/:id/products", getCategoryProducts);

export default router;