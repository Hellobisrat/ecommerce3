import express from "express";
import {
  createCategory,
  getCategories,
  getCategoryProducts,
} from "../controllers/categoryController.js";

const router = express.Router();

router.post("/", createCategory);
router.get("/", getCategories);
router.get("/:id/products", getCategoryProducts);

export default router;