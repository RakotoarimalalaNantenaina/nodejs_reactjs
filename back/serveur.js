
var monroute = require('./Route/route');    
var cors = require('cors')
var express = require('express');
var app = express();
const  methodOverride= require('method-override')
app.use( methodOverride('X-HTTP-Method'))
app.use( methodOverride ('X-HTTP-Method-Override'))
app.use(methodOverride ('X-Method-Override'))
app.use( methodOverride ('_method'))
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded ({extended:true }));
app.use(bodyParser.json ());
app.use(cors())
app.listen(8080);
app.use('/', monroute)

console.log('Server demarer');