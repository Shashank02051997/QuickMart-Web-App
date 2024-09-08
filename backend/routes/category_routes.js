import express from "express";
const router = express.Router();
import { authMiddleware, isAdmin } from "../middlewares/auth_middleware.js";

import {
  getSpecificCategory,
  getAllCategories,
} from "../controllers/category_controller.js";

router.get("/:cat_id", authMiddleware, getSpecificCategory);
router.get("/", authMiddleware, getAllCategories);

export default router;
