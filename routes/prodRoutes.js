const express = require("express");
const router = express.Router();
const prodController = require("../controllers/prodController");

router.get("/", prodController.listarTodos);
router.get("/:id", prodController.listarPorId);
router.post("/", prodController.criar);
router.put("/:id", prodController.atualizar);
router.delete("/:id", prodController.deletar);

module.exports = router;