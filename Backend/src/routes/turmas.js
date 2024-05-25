import express from "express";
import { getTurma, getTurmas } from "../controllers/turmas.js";

const router = express.Router();

router.get("/", getTurmas);
router.get("/:idturma", getTurma);

export default router;
