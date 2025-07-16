import React, { useState } from "react";

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! I’m your ServiceEase Assistant. Describe your issue, and I’ll guide you to the right service.",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { type: "user", text: userInput }];
    setMessages(newMessages);
    setUserInput("");
    setLoading(true);

    try {
const res = await fetch("http://localhost:7000/api/v1/users/chatAI", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ question: userInput }), // ✅ match backend
});


      const data = await res.json();
      console.log("Response from backend:", data);
      setMessages([
        ...newMessages,
{ type: "bot", text: data.reply || "Sorry, I didn't get that." },
      ]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { type: "bot", text: "Something went wrong. Try again later." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="relative min-h-screen bg-[#161B22] text-white px-4 py-10 sm:px-6 lg:px-8 flex items-center justify-center">
      {/* Background Blur */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          className="relative left-[calc(50%-11rem)] w-[36rem] sm:w-[72rem] aspect-[1155/678] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Top-left Title */}
      <div className="absolute top-4 left-6 z-10">
        <a href="/">
          <h1 className="text-2xl font-bold text-white cursor-pointer">ServiceEase</h1>
        </a>
      </div>

      {/* Chat Window */}
      <div className="w-full sm:w-[600px] max-h-[90vh] flex flex-col shadow-2xl rounded-2xl border bg-white text-black">
        <div className="bg-blue-600 text-white p-4 rounded-t-2xl font-semibold text-xl text-center">
          ServiceEase Assistant
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`px-4 py-3 rounded-xl max-w-[85%] text-sm ${
                msg.type === "user"
                  ? "bg-blue-100 ml-auto text-right"
                  : "bg-gray-100"
              }`}
            >
              {msg.text}
            </div>
          ))}
          {loading && (
            <div className="px-4 py-2 bg-gray-100 rounded-xl w-fit">
              Typing...
            </div>
          )}
        </div>

        <div className="flex border-t p-3 bg-white">
          <input
            type="text"
            className="flex-1 px-4 py-2 rounded-l-xl border outline-none text-sm"
            placeholder="Describe your problem..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white px-5 py-2 rounded-r-xl hover:bg-blue-700 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
