const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const PORT = 4000;
const app = express();
app.use(cors());
app.use(express.json()); // to recognize the incoming Request Object as a JSON Object.

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1522",
  database: "handajitech",
});
connection.connect(function (err) {
  err ? console.log(err) : console.log(connection);
});

app.get("/", function (req, res) {
  connection.query("SELECT * FROM startup", function (err, data) {
    err ? res.send(err) : res.json({ startuplist: data });
  });
});
app.post("/api/savedata", function (req, res) {
  const name = req.body.name;
  const country = req.body.country;
  console.log(name);
  const insert_query = `INSERT INTO startup (name,country) VALUES('${name}','${country}')`;
  connection.query(insert_query, function (err, data) {
    err ? res.send(err) : res.send("Successfully added!!!");
  });
});

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});
