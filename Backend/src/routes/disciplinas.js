import express from "express";
import {
  getDisciplinas,
  getDisciplina,
  getDisciplinasByIdUsuario,
  createDisciplinasByIdUsuario,
} from "../controllers/disciplinas.js";

const router = express.Router();

router.get("/", getDisciplinas);
router.get("/:idDisc", getDisciplina);
router.get("/usuario/:idusuario", getDisciplinasByIdUsuario);
router.post("/usuario/criar", createDisciplinasByIdUsuario);

export default router;
