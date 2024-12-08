const WebSocket = require('ws');
const net = require('net');

const wsServer = new WebSocket.Server({ port: 8080 });

wsServer.on('connection', ws => {
    const telnetClient = new net.Socket();

    telnetClient.connect(23, 'towel.blinkenlights.nl', () => {
        console.log('Connected to Telnet Server');
    });

    telnetClient.on('data', data => {
        ws.send(data.toString());
    });

    ws.on('message', message => {
        telnetClient.write(message);
    });

    ws.on('close', () => {
        telnetClient.end();
    });
});