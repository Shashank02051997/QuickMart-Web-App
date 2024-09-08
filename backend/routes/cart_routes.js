import express from "express";
const router = express.Router();
import { authMiddleware, isAdmin } from "../middlewares/auth_middleware.js";

import { getAllCartItemsOfUser } from "../controllers/cart_controller.js";

router.get("/", authMiddleware, getAllCartItemsOfUser);

export default router;
