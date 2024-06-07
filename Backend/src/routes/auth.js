import express from "express";
import {
  login,
  registerAluno,
  registerProfessor,
  logout,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/cadastro-aluno", registerAluno);
router.post("/cadastro-professor", registerProfessor);
router.post("/logout", logout);

export default router;
