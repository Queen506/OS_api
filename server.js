const express = require("express");
const app = express();
const port = 8080;

app.use(express.static("public"));

app.get("/", async (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.status(200);
  //res.send("<h1>hello world</h1>");
  res.sendFile("public\\os.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
