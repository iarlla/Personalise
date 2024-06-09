import express from "express";
import { postPreQuestoes, postPosQuestoes } from "../controllers/questoes.js";

const router = express.Router();

router.post("/preQuest/editar", postPreQuestoes);
router.post("/posQuest/editar", postPosQuestoes);

export default router;
