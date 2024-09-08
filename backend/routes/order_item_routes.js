import express from "express";
const router = express.Router({ mergeParams: true });

import { authMiddleware, isAdmin } from "../middlewares/auth_middleware.js";

import { getAllOrderItemsOfUser } from "../controllers/order_item_controller.js";

router.get("/", authMiddleware, getAllOrderItemsOfUser);

export default router;
