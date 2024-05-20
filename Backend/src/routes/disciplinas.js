import express from "express";
import { getDisciplinas, getDisciplina } from "../controllers/disciplinas.js";

const router = express.Router();

router.get("/", getDisciplinas);
router.get("/:id", getDisciplina);

export default router;
