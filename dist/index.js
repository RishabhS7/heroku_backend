const express = require("express");
const app = express();
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("HEllo World");
});
app.get("/players", (req, res) => {
  res.send({ playerOne: "somebody", player2: "nobody" });
});

app.listen(port, () => {
  console.log(`expamle app is listening as port http://localhost:${port}`);
});
