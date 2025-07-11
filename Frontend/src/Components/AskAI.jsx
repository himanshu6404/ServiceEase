// AskAI.jsx
import { FaRobot } from "react-icons/fa";

const AskAI = () => (
  <div id="askAI" className="bg-purple-100 py-16 px-4 sm:px-10 text-center">
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-center mb-6">
        <FaRobot className="text-5xl text-pink-600" />
      </div>
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Need Help? Talk to Our
          <span className="text-pink-500"> AI Assistant</span>
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Not sure what's wrong? Describe your issue and let our AI Assistant guide you. From diagnosing the problem to suggesting the right expert — we've got your back!
      </p>
      <a
        href="/ask-ai"
        className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition"
      >
        Ask Now →
      </a>
    </div>
  </div>
);

export default AskAI;
