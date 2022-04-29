const db = require("../db/connection");

exports.fetchAllProducts = () => {
  const queryString = `SELECT * FROM products;`;

  return db.query(queryString).then((results) => {
    return results.rows;
  });
};
