import { WebSocketServer } from "ws";

const PORT = 9000;

const wss = new WebSocketServer({ port: PORT }, () => {
  console.log(`WebSocket server is running on ws://localhost:${PORT}`);
});

wss.on("connection", (ws) => {
  console.log("🔌 Client connected");

  ws.send("👋 Welcome to the WebSocket server!");

  ws.on("message", (message) => {
    const msg = message.toString();
    console.log(`📨 Received: ${msg}`);
    ws.send(`📣 Echo from server: ${msg}`);
  });

  ws.on("close", () => {
    console.log("❌ Client disconnected");
  });
});
