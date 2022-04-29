const express = require("express");
const { getAllProducts } = require("../controllers/products.controller");

const productsRouter = express.Router();

productsRouter.route("/").get(getAllProducts);

module.exports = productsRouter;
