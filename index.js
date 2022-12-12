const express = require("express");

const app = express();

const sayHello = (req, res) => {
  res.send("hello world");
};

app.get("/", sayHello);

const routes = require("./routes");

app.use(routes);

const port = 5000;

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`server listening on port ${port}`);
  }
});
