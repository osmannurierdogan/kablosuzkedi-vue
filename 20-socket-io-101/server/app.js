const socketio = require("socket.io");
const express = require("express");
const http = require("http");
const app = express();
const PORT = process.env.PORT || 2000;

const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
  },
});

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}... `);
  
  io.on("connection", (socker) => {
    console.log("socket :>> ", socket);
  });
});
