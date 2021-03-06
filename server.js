// Dependencies
var express = require("express");
var bodyParser = require("body-parser");


// Express config
var app = express();
var port = process.env.PORT || 3002;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static("./app/public/assets"));


// Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Listener
app.listen(port, "0.0.0.0", function() {
  console.log("App listening on port: " + port);
});