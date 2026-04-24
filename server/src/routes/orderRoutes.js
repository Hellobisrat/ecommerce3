import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { adminOnly } from "../middlewares/adminMiddleware.js";
import {
  placeOrder,
  getUserOrders,
  getAllOrders,
  updateOrderStatus,
} from "../controllers/orderController.js";

const router = express.Router();

router.post('/',protect,placeOrder);
router.get('/my-orders',protect,getUserOrders);
router.get('/',protect,adminOnly,getAllOrders);
router.put('/:id',protect,adminOnly,updateOrderStatus);

export default router;