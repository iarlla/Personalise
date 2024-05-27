import express from "express";
import { getProfessorID, getProfessores } from "../controllers/professor.js";
const router = express.Router();

router.get("/", getProfessores);
router.post("/id", getProfessorID);

export default router;
