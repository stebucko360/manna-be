const express = require("express");
const productsRouter = require("./products.router");

const apiRouter = express.Router();

apiRouter.use("/products", productsRouter);

module.exports = apiRouter;
