//Required Dependencies
var express = require('express'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy,
    session = require('express-session'),
    cors = require('cors'),
    port = 2000,
    corsOptions = {
        origin: 'http://localhost' + port
    };

//Init Express
var app = express();

//Middleware and Controllers
var productsCtrl = require('./server/controllers');

app.use(bodyParser.json());
app.use(cors(corsOptions));







app.listen(port, function(){
  console.log('Listening on port', port);
});
