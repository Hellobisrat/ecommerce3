import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { adminOnly } from "../middlewares/adminMiddleware.js";
import { getUsers, deleteUser, makeAdmin } from "../controllers/adminController.js";

const router = express.Router();

router.get("/users", protect, adminOnly, getUsers);
router.delete("/users/:id", protect, adminOnly, deleteUser);
router.put("/users/:id/admin", protect, adminOnly, makeAdmin);

export default router;