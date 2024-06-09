import express from "express";
import {
  byUserTurmaDisci,
  getQuestionarios,
  deleteQuestionariobyUserTurmaDisci,
  getQuestionario,
  getQuestionarioDaTurmaByIdUsuarioAndIdDisciplina
} from "../controllers/questionario.js";

const router = express.Router();

router.get("/", getQuestionarios);

router.get("/:idquestionario", getQuestionario);

router.get("/aluno/:idDisciplina", getQuestionarioDaTurmaByIdUsuarioAndIdDisciplina);

router.get(
  "/byUserTurmaDisci/:tipo/:idUsuario/:idTurma/:idDisc",
  byUserTurmaDisci
);
router.delete(
  "/byUserTurmaDisci/:tipo/:idUsuario/:idTurma/:idDisc",
  deleteQuestionariobyUserTurmaDisci
);

export default router;
