import express from "express";
const router = express.Router();
import { authMiddleware } from "../middlewares/auth_middleware.js";

import {
  getUserDetails,
  updateUserDetails,
} from "../controllers/user_controller.js";

router.get("/:user_id", authMiddleware, getUserDetails);
router.put("/:user_id", authMiddleware, updateUserDetails);

export default router;
