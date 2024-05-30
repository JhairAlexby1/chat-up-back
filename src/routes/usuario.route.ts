import express from "express";

import UsuarioController from "../controllers/usuario.controller";

const router = express.Router();

router.get("/", UsuarioController.index);
router.post("/", UsuarioController.create);
router.post("/login", UsuarioController.login);
router.get("/conected", UsuarioController.indexConected);

export default router;
