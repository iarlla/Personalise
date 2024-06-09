import express from "express";
import {
  getRespostas,
  postResposta,
  getRespostaByIdQuestionario,
} from "../controllers/resposta.js";

const router = express.Router();

router.get("/", getRespostas);
router.get("/relatorio/:idDisciplina", getRespostaByIdQuestionario);
router.post("/", postResposta);

export default router;
