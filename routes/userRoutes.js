const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.listarTodos);
router.get("/:id", userController.listarPorId);
router.post("/", userController.criar);
router.put("/:id", userController.atualizar);
router.delete("/:id", userController.deletar);

module.exports = router;
