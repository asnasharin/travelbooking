import express from "express";
import { Login, profile, Register } from "../controllers/authController.js";
import  authMiddleware  from "../middleware/authMiddleware.js";

const router = express.Router()

router.post("/register", Register);
router.post("/login", Login);
router.get("/profile",authMiddleware, profile);

export default router;