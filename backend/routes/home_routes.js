import express from "express";
const router = express.Router();
import { authMiddleware, isAdmin } from "../middlewares/auth_middleware.js";

import { getHomeDetail } from "../controllers/home_controller.js";

router.get("/", authMiddleware, getHomeDetail);

export default router;
