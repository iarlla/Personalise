import express from "express";
import {
  getQuestionarioByDiscTurmaProfessor,
  getQuestionarios,
  deleteQuestionarioByDiscTurmaProfessor,
} from "../controllers/questionario.js";

const router = express.Router();

router.get("/", getQuestionarios);
router.get(
  "/byDiscTurmaProfessor/:idProfessor/:idDisc/:idTurma",
  getQuestionarioByDiscTurmaProfessor
);
router.delete(
  "/byDiscTurmaProfessor/:idProfessor/:idDisc/:idTurma",
  deleteQuestionarioByDiscTurmaProfessor
);

export default router;
