// Express things
var express = require('express');
var bodyParser = require('body-parser');

// Dependencies
var httpstatus = require('http-status');

// Server start

var app = express();
app.disable('etag');

app.use(bodyParser.json());
