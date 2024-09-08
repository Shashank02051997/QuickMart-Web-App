import express from "express";
const router = express.Router({ mergeParams: true });

import { authMiddleware, isAdmin } from "../middlewares/auth_middleware.js";

import {
  getAllOrdersOfUser,
  createOrder,
  createOrderItems,
} from "../controllers/order_controller.js";

router.get("/", authMiddleware, getAllOrdersOfUser);
router.post("/", authMiddleware, createOrder);
router.post("/:order_id", authMiddleware, createOrderItems);

export default router;
