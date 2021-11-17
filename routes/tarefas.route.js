const express = require("express");
const router = express.Router();

const Controller = require("../controllers/tarefas.controller");
const controller = new Controller();

//Rotas
router.get("/", controller.tudo);
router.get("/:id", controller.um);
router.post("/novo", controller.novo);
router.put("/editar/:id", controller.editar);
router.delete("/deletar/:id", controller.deletar);

module.exports = router;