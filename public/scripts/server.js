'use strict';

var http = require('http');
var express = require('express');

var app = express();
app.set('view engine', 'html');

app.use(function (req, res, next) {
    console.log('in middleware');
    next();
    console.log('out of middleware');
});

app.get('/', function (req, res) {
    res.render('index.html');
});

var server = new http.Server(app);

server.listen(3000, function () {
    console.log('Server running on port 3000');
});