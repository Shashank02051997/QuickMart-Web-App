import express from "express";
const router = express.Router({ mergeParams: true });
import {
  getAllProductsOfCategory,
  getSpecificProductOfCategory,
} from "../controllers/category_product_controller.js";
import { authMiddleware, isAdmin } from "../middlewares/auth_middleware.js";

router.get("/", authMiddleware, getAllProductsOfCategory);
router.get("/:product_id", authMiddleware, getSpecificProductOfCategory);

export default router;
