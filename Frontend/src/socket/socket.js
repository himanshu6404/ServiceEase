// socket.js
import { io } from "socket.io-client";

// Replace this with your actual backend chat server URL
const socket = io("https://serviceease-socket.onrender.com", {
  transports: ["websocket"],
  withCredentials: true,
  autoConnect: false, // optional: connect manually when needed
});

export default socket;
