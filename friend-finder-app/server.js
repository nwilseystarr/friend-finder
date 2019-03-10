var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

// Setting up the express app to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routing files 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Starting the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
  