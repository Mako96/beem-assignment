var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  bodyParser = require('body-parser');
  

app.use(bodyParser.urlencoded({ extended: true ,limit: '100mb'}));
app.use(bodyParser.json({limit: '100mb'}));


var serverStatusRoutes = require('./api/routes/lookupRoutes'); //importing route
serverStatusRoutes(app); //register the route




app.listen(port);


console.log('RESTful API server started on: ' + port);