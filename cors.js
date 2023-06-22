const express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());

app.get("/products/:id", (req, res, next) => {
  res.json({ msg: "hi" });
});

app.listen(80, () => {
  console.log("CORS-enabled web server listening on port 80");
});
