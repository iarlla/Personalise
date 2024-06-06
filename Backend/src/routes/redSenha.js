import express from "express";
import { enviarEmail } from "../controllers/redSenha.js";

const router = express.Router();

router.post("/", enviarEmail);
router.post("/");

export default router;
