import express from "express";
import { getDisciplinas, getDisciplina, getDisciplinasByIdUsuario } from "../controllers/disciplinas.js";

const router = express.Router();

router.get("/", getDisciplinas);
router.get("/:idDisc", getDisciplina);
router.get("/usuario/:idusuario", getDisciplinasByIdUsuario)

export default router;
