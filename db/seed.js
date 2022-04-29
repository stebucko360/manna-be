const format = require("pg-format");
const db = require("./connection");
const data = require("./data/items");

db.connect()
  .then((client) => {
    return client
      .query(`DROP TABLE IF EXISTS products;`)
      .then(() => {
        return client.query(`CREATE TABLE products(
          id SERIAL PRIMARY KEY,
          itemName VARCHAR(100) NOT NULL,
          category VARCHAR(50) NOT NULL,
          image TEXT NOT NULL,
          location VARCHAR(50) NOT NULL,
          description TEXT NOT NULL,
          contact VARCHAR(20) NOT NULL
          );`);
      })
      .then(() => {
        const query = format(
          `INSERT INTO products
          (itemName, category, image, location, description, contact)
          VALUES  %L;`,
          data.map((item) => {
            return [
              item.itemName,
              item.category,
              item.image,
              item.location,
              item.description,
              item.contact,
            ];
          })
        );
        return client.query(query);
      });
  })
  .then(() => db.end())
  .catch((err) => {
    console.log("error: ", err);
  });
