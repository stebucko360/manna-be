const { fetchAllProducts } = require("../models/products.model");

exports.getAllProducts = (req, res, next) => {
  fetchAllProducts().then((response) => {
    res.status(200).send({ products: response });
  });
};
