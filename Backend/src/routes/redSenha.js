import express from "express";
import { verificarEmailEEnviarCodigo } from "../controllers/redSenha.js";

const router = express.Router();

router.post("/", verificarEmailEEnviarCodigo);

export default router;