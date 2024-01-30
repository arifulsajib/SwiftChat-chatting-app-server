const express = require("express");

const app = express();

// routes
app.get("/", (req, res) => {
  res.send("welcome");
});

// listen
app.listen(3000, () => {
  console.log(`listening to port 3000`);
});
