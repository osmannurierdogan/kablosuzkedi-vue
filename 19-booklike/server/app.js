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

  io.on("connection", (socket) => {
    /* console.log("socket :>> ", socket);
    console.log("socket.id :>> ", socket.id);
    //socket.join("133");
    // ! GREEDING MESSAGE
    //io.in(roomId).emit();
    socket.emit("WELCOME_MESSAGE", `Oooooo ${socket.id} bro welcomee`);
    socket.on("SEND_MESSAGE", (data) => {
      console.log("SEND_MESSAGE :>> ", data);
    }); */
    socket.on("NEW_BOOKMARK_EVENT", (bookmark) => {
      console.log("NEW_BOOKMARK_EVENT :>> ", bookmark);
      io.emit("NEW_BOOKMARK_ADDED", bookmark);
    });
  });
});
