import express from "express";
import {
  byUserTurmaDisci,
  getQuestionarios,
  deleteQuestionariobyUserTurmaDisci,
  getQuestionario,
  getQuestionarioDaTurmaByIdUsuarioAndIdDisciplina,
} from "../controllers/questionario.js";

const router = express.Router();

router.get("/", getQuestionarios);
router.get("/:hash", getQuestionario);
router.get("/aluno/:idDisciplina", getQuestionarioDaTurmaByIdUsuarioAndIdDisciplina);
router.get("/byUserTurmaDisci/:tipo/:idUsuario/:idTurma/:idDisc", byUserTurmaDisci);
router.delete("/byUserTurmaDisci/:tipo/:idUsuario/:idTurma/:idDisc", deleteQuestionariobyUserTurmaDisci);

// Catch-all route for debugging
router.get('*', (req, res) => {
  console.log('Unhandled route:', req.path);
  res.status(404).send('Route not found');
});

export default router;
