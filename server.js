const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const pool = require("../handajitech/connection");
const app = express();
app.use(cors());
app.use(express.json()); // to recognize the incoming Request Object as a JSON Object.

app.get("/", function (req, res) {
  pool.query("SELECT * FROM startup", function (err, data) {
    err ? res.send(err) : res.json({ startuplist: data });
  });
});
app.post("/api/savedata", function (req, res) {
  const name = req.body.name;
  const country = req.body.country;
  console.log(name);
  const insert_query = `INSERT INTO startup (name,country) VALUES('${name}','${country}')`;
  pool.query(insert_query, function (err, data) {
    err ? res.send(err) : res.send("Successfully added!!!");
  });
});

app.listen(process.env.APP_PORT, () => {
  console.log("App running on port!!:", process.env.APP_PORT);
});
