import express from "express";
const router = express.Router();
import { authMiddleware, isAdmin } from "../middlewares/auth_middleware.js";

import { getAllNotifications } from "../controllers/notification_controller.js";

router.get("/", authMiddleware, getAllNotifications);

export default router;
