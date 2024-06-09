import express from "express";
import { getUsers, getInfoOfUser } from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/usuario/:idusuario", getInfoOfUser);

export default router;
