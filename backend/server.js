"use strict";

var clients = [];
process.title = 'mobile-controller-server';
var webSocketsServerPort = 1337;

var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function(request, response) {
  // process HTTP request. Since we're writing just WebSockets
  // server we don't have to implement anything.
});

server.listen(webSocketsServerPort, function() {
  console.log((new Date()) + " Server is listening on port "
      + webSocketsServerPort);
});

var wsServer = new WebSocketServer({
    httpServer: server
    // You should not use autoAcceptConnections for production
    // applications, as it defeats all standard cross-origin protection
    // facilities built into the protocol and the browser.  You should
    // *always* verify the connection's origin and decide whether or not
    // to accept it.
    // autoAcceptConnections: false
});

wsServer.on('request', function(request) {
  var connection = request.accept(null, request.origin);
  var index = clients.push(connection) - 1;

  connection.on('message', function(message) {
    if (message.type === 'utf8') {
      for (var i=0; i < clients.length; i++) {
        clients[i].sendUTF(JSON.stringify({ command: message.utf8Data }));
      }
    }
  });

  connection.on('close', function(connection) {
    clients.splice(index, 1);
  });
});
