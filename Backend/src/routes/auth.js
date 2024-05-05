import express from "express";
import { login, register, logout } from "../middlewares/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/cadastro", register);
router.post("/logout", logout);

export default router;
