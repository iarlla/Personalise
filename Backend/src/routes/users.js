import express from "express";
import {
  getUsers,
  getInfoOfUser,
  updateInfoOfUser,
  updatePassOfUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/usuario/:idusuario", getInfoOfUser);
router.post("/usuario/editar/:idusuario", updateInfoOfUser);
router.post("/usuario/alterar-senha/:idusuario", updatePassOfUser);

export default router;
