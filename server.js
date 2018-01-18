// Dependencies
var express = require("express");
var bodyParser = require("body-parser");


// Express config
var app = express();
var port = process.env.PORT || 3002;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


// Routes
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


// Listener
app.listen(port, "0.0.0.0", function() {
  console.log("App listening on port: " + PORT);
});