const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});
io.on("connection", (socket) => {
    socket.on("send_message", (data) => {
        socket.broadcast.to(data.room).emit("receive_message", data);
    });
    socket.on("join_room", (data) => {
        socket.join(data.room);
    });
});
server.listen(3001, () => {
  console.log("server is running");
});
