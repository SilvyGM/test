const router = require("express").Router();
const { Router } = require("express");
const product = require("../product.model");

// GET all products
router.post("/", async function (req, res) {
  try {
    const products = new product(req.body);
    await products.save();
    res.status(200).json("creado");
  } catch {
    res.status(500).json("nope");
  }
});

Router.get("/", async function (req, res) {
  try {
    const products = await product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
