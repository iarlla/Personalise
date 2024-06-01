import express from "express";
import {
  getRespostas
} from "../controllers/resposta.js";

const router = express.Router();

router.get("/", getRespostas);


export default router;
