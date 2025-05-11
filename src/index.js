const express = require("express");
const app = express();
const port = normalizePort(process.env.PORT)


/**
 * Normalize a port into a number
 */

function normalizePort(val) {
  if(val === undefined) {
    return 3000
  }
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    throw new Error(`${val} should be a valid number`)
  }

  if (port <= 0) {
    throw new Error(`${val} should be a positive number`)
  }

  return port;
}


app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`App is listening at ${port}!`);
});