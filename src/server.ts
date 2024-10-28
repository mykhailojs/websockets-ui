import { WebSocketServer, WebSocket } from 'ws';
import { handleConnection } from './handlers/connectionHandler';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws: WebSocket) => {
  handleConnection(ws);
});

console.log('WebSocket server started on ws://localhost:8080');
