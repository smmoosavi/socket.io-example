var express = require('express');
var path = require('path');
var http = require('http');

app = express();
app.use(express.static(path.join(__dirname, 'public')));
var server = http.createServer(app);
var io = require('socket.io')(server);
app.set('io', io);
require('./server')();

server.listen(3000);