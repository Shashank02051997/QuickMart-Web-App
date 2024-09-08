import express from "express";
const router = express.Router();
import {
  getSpecificProduct,
  getAllProducts,
} from "../controllers/product_controller.js";
import { authMiddleware, isAdmin } from "../middlewares/auth_middleware.js";

router.get("/:product_id", authMiddleware, getSpecificProduct);
router.get("/", authMiddleware, getAllProducts);

export default router;
