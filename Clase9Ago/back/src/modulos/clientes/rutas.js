const express = require("express");
const router = express.Router();
const controller = require("../controlador");

router.get("/", (req, res) => {
  console.log(controller.getAll());
  res.send("clientes ok");
});

module.exports = router;
