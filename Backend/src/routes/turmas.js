import express from "express";
import { getTurma, getTurmas, getTurmasByIdUsuario } from "../controllers/turmas.js";

const router = express.Router();

router.get("/", getTurmas);
router.get("/:idturma", getTurma);
router.get("/usuario/:idusuario", getTurmasByIdUsuario)

export default router;
