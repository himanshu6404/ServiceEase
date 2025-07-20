import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";


const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "https://serviceease-webservice.onrender.com/", // Replace with your frontend URL in production
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Join user to a room based on bookingId or combined user IDs
  socket.on("join_room", (roomId) => {
    socket.join(roomId);
    console.log(`User ${socket.id} joined room ${roomId}`);
  });

  // Listen for send_message
  socket.on("send_message", (data) => {
    console.log("Message Received:", data);
    io.to(data.room).emit("receive_message", data); // emit to all users in the room
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(7001, () => {
  console.log("Chat server running on port 7001");
});
