import express from "express";
import { getDisciplinas } from "../controllers/disciplinas.js";

const router = express.Router();

router.get("/", getDisciplinas);

export default router;
