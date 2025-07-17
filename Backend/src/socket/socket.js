// socket.js
export const socketHandler = (io) => {
  io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);
 
  socket.on("sendMessage", (data) => {
    console.log("Message received:", data);
    io.emit("receiveMessage", data); // Send to all clients
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
  }); 
});
}