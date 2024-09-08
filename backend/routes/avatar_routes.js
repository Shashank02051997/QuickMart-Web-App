import express from "express";
const router = express.Router();
import { authMiddleware, isAdmin } from "../middlewares/auth_middleware.js";

import { getAllAvatars } from "../controllers/avatar_controller.js";

router.get("/", authMiddleware, getAllAvatars);

export default router;
