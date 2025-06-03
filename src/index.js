const APP_INSIGHTS_CONNECTION_STRING = "InstrumentationKey=5a5a7d93-47f6-4655-93be-e3870f5f6d6f;IngestionEndpoint=https://francecentral-1.in.applicationinsights.azure.com/;LiveEndpoint=https://francecentral.livediagnostics.monitor.azure.com/;ApplicationId=87ccec3a-775c-4469-8dc0-c0fbb3afcfef"
let appInsights = require('applicationinsights');
appInsights.setup(APP_INSIGHTS_CONNECTION_STRING)
    .start();
const express = require("express");
const { getBooks } = require("@codeworksfrance/catalog")
var logger = require('morgan');


const app = express();
app.use(logger('dev'));




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


const homeHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Book Store Web App</title>
</head>
<body>
    <h1>Welcome to the Book Store</h1>
    <p>Use the following endpoints:</p>
    <ul>
        <li><a href="/books">/books</a>: List all the books in the catalog</li>
        <li><a href="/crash">Don't click here!</a></li>
    </ul>
</body>
</html>
`;

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



app.get("/", (req, res) => {
    res.send(homeHtml);
});

app.get("/books", (req, res) => {
    const books = getBooks()
    res.send(books)
});

app.get("/crash", (req, res) => {
  const badId = "no-such-id"
  const books = getBooks()
  const book = books[badId]
  res.send(book.title)
});

app.listen(port, () => {
    console.log(`App is listening at ${port}!`);
});
