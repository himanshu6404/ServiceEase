import { io } from "socket.io-client";

// Connect to the chat server
const socket = io("http://localhost:7001", {
  transports: ["websocket"],
  withCredentials: true
});

export default socket;
