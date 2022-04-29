const express = require("express");
const cors = require("cors");

const apiRouter = require("./routers/api.router");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", apiRouter);
app.get("/*", (req, res) => {
  res.status(200).send({
    msg: "🧔Welcome to manna care API, use the endpoint /api to see all available endpoints💾",
  });
});

module.exports = app;
