#!/usr/bin/env node

var debug = require('debug')('exp:server');
var app = require('./app');
var http = require('http');
var errorhandler = require('errorhandler');

var port = 7070;
app.set('port', port);
console.log("Port is adjusted", port);

var server = http.createServer(app);

app.on('uncaughtException', function (exception) {
    console.log(exception);
});

function errorNotification(err, str, req) {
    console.log(err);
}

app.use(errorhandler({log: errorNotification}));

server.listen(port);
console.log("Port is opened");
server.on('error', onError);
console.log("Error function is adjusted");
server.on('listening', onListening);
console.log("Listening function is adjusted");

function onError(error) {
    console.log(error);
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    try {
        var addr = server.address();
        var bind = typeof addr === 'string' ?
            'pipe ' + addr :
            'port ' + addr.port;
        debug('Listening on ' + bind);
    } catch (ex) {
        console.log(ex);
    }
}

app.on("SIGINT", function () {
    console.log("got SIGINT");
    server.close(function () {
        console.log("closed");
        server.exit(0);
    });
});
