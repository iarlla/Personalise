import express from "express";
import { getQuestoes } from "../controllers/questoes.js";

const router = express.Router();

router.post("/preQuest/editar", getQuestoes); // Usar POST

export default router;
