import express from "express";
import {
  getRespostas,
  postResposta
} from "../controllers/resposta.js";

const router = express.Router();

router.get("/", getRespostas);
router.post("/", postResposta);


export default router;
