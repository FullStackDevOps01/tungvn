'use strict';

var express = require('express');
var app = express();
var logger = require('./helpers/logger');
var config = require('config');

var server = app.listen(config.get('server.port'), function(){
    var host = server.address().address;
    var port = server.address().port;
    logger.info('Server start at http://%s:%s', config.get('server.host'), config.get('server.port'));
});

// say hello
app.get('/hello', function(req, res){
    logger.info('GET request to /hello');
    res.send(JSON.stringify({'hello': 'world'}));
});