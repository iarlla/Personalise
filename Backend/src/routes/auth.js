import express from "express";
import { login, registerProfessor, logout } from "../middlewares/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/cadastro-professor", registerProfessor);
router.post("/logout", logout);

export default router;
