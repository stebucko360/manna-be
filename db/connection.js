const { Pool } = require("pg");
require("dotenv").config();

const db = new Pool({
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  host: process.env.PGHOST,
  maxUses: 10,
});

module.exports = db;
