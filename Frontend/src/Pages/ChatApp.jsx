import React, { useEffect, useState } from "react";
import socket from "../socket/socket.js";

const ChatBox = ({ roomId, username, onClose }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.connect();
    socket.emit("join_room", roomId);

    const handleReceiveMessage = (data) => {
      // Only append messages from others or prevent duplicates
      if (data.author !== username) {
        setMessages((prev) => [...prev, data]);
      }
    };

    socket.on("receive_message", handleReceiveMessage);

    return () => {
      socket.off("receive_message", handleReceiveMessage);
      socket.disconnect();
    };
  }, [roomId]);

  const sendMessage = () => {
    if (message.trim() !== "") {
      const msgData = {
        room: roomId,
        author: username,
        message: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      socket.emit("send_message", msgData);
      setMessages((prev) => [...prev, msgData]); // Append your own message
      setMessage("");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-gray-900 text-white w-[90%] md:w-[400px] h-[450px] rounded-2xl shadow-xl flex flex-col">
        <div className="p-4 border-b border-gray-700 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Live Chat</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-red-500 text-lg">&times;</button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg max-w-xs ${
                msg.author === username
                  ? "bg-blue-600 self-end ml-auto text-right"
                  : "bg-gray-700 self-start mr-auto"
              }`}
            >
              <div className="text-sm font-semibold">{msg.author}</div>
              <div className="text-sm">{msg.message}</div>
              <div className="text-xs text-gray-300 mt-1">{msg.time}</div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-gray-700 flex">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            className="flex-1 p-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type a message..."
          />
          <button
            onClick={sendMessage}
            className="ml-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
