import express from "express";
import { getTurma, getTurmas } from "../controllers/turmas.js";

const router = express.Router();

router.get("/", getTurmas);
router.get("/:id", getTurma);

export default router;
