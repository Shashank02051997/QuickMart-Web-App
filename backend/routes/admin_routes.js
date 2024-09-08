import express from "express";
const router = express.Router();
import { authMiddleware, isAdmin } from "../middlewares/auth_middleware.js";
import { adminLogin } from "../controllers/admin_controller.js";

import {
  getAllUsers,
  deleteUserDetails,
  updateUserDetails,
} from "../controllers/user_controller.js";

import {
  createCategory,
  deleteSpecificCategory,
  updateCategory,
} from "../controllers/category_controller.js";

import {
  createProduct,
  deleteSpecificProduct,
  updateProduct,
} from "../controllers/product_controller.js";

import { getUserDetails } from "../controllers/user_controller.js";

router.post("/login", adminLogin);
//router.post("/users/register", authMiddleware, isAdmin, createUser);
router.get("/users/", authMiddleware, isAdmin, getAllUsers);
router.get("/users/:user_id", authMiddleware, isAdmin, getUserDetails);
router.delete("/users/:user_id", authMiddleware, isAdmin, deleteUserDetails);
router.put("/users/:user_id", authMiddleware, isAdmin, updateUserDetails);

router.post("/categories", authMiddleware, isAdmin, createCategory);
router.delete(
  "/categories/:cat_id",
  authMiddleware,
  isAdmin,
  deleteSpecificCategory
);
router.put("/categories/:cat_id", authMiddleware, isAdmin, updateCategory);

router.post("/products/", authMiddleware, isAdmin, createProduct);
router.delete(
  "/products/:product_id",
  authMiddleware,
  isAdmin,
  deleteSpecificProduct
);
router.put("/products/:product_id", authMiddleware, isAdmin, updateProduct);

export default router;
