import express from "express";
import { getProfessorID, getProfessores } from "../controllers/professor.js";
const router = express.Router();

router.get("/", getProfessores);
router.get("/:professorId", getProfessorID);

export default router;
