import express from "express";
const router = express.Router();
import { login } from "../controllers/user_controller.js";

router.post("/login", login);

export default router;
