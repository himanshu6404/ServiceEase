// chatServer.js
import express from "express";
import http from "http";
import { Server } from "socket.io";
import { socketHandler } from "./socket.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // You can replace with specific frontend URL
    methods: ["GET", "POST"],
  },
});

socketHandler(io);

const CHAT_PORT = process.env.CHAT_PORT || 7001;

server.listen(CHAT_PORT, () => {
  console.log(`Chat server running on port ${CHAT_PORT}`);
});
