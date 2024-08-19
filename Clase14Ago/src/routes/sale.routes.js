const Router = require("express").Router();
const salesController = require("../controllers/salesController");

Router.get("/", salesController.list);
Router.post("/", salesController.create);

module.exports = Router;
