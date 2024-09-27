import express from "express";
import {
  getTurma,
  getTurmas,
  getTurmasByIdUsuario,
} from "../controllers/turmas.js";

const router = express.Router();

router.get("/", getTurmas);
router.get("/:idturma", getTurma);
router.get("/disciplina/:iddisc/professor/:idprofessor", getTurmasByIdUsuario);

export default router;
