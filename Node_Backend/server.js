// Express things
var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression')

// Dependencies
var httpstatus = require('http-status');

// Server start

var app = express();
app.disable('etag');
app.use(compression())

app.use('/api', require('./api.js'));

app.use(express.static('angular-static'))

app.listen('3000');
console.log('server started on port 3000')