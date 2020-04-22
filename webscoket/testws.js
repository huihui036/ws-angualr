
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('open', function open() {
  console.log('connected');
});

server.on('close', function close() {
  console.log('disconnected');
});

server.on('connection', function connection(ws, req) {
 

  ws.on('message', function incoming(message) {
    console.log('received: %s from %s', message, clientName);
    
    // 广播消息给所有客户端
    // server.clients.forEach(function each(client) {
    //   if (client.readyState === WebSocket.OPEN) {
    //     client.send( clientName + " -> " + message);
    //   }
    // });

  });

const broadcast = (message) => {
    console.log('broadcast',message)
    server.clients.forEach(function(conn) {
      conn.sendText(message)
    })
  }
});