const app = require("./app");

const { PORT = 22 } = process.env;

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Listening on ${PORT}...`);
});
