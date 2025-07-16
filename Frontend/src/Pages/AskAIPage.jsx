// src/pages/AskAIPage.jsx
import { FaRobot } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AskAIPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#161B22] text-white relative px-4 py-10 sm:px-6 lg:px-8">
      {/* Background Gradient Blur */}
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

      {/* Top Left Title */}
      <div className="absolute top-4 left-6">
        <h1
          className="text-2xl font-bold text-white cursor-pointer"
          onClick={() => navigate('/')}
        >
          ServiceEase
        </h1>
      </div>

      {/* Centered AI Content */}
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="text-center max-w-2xl">
          <div className="flex justify-center mb-6">
            <FaRobot className="text-6xl text-pink-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Need Help? Talk to Our{" "}
            <span className="text-pink-500">AI Assistant</span>
          </h2>
          <p className="text-lg text-gray-300 mb-6 px-4">
            Not sure what's wrong? Describe your issue and let our AI Assistant guide you.
            From diagnosing the problem to suggesting the right expert — we've got your back!
          </p>
          <a href="/chatbot">
                    <button className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition cursor-pointer">
            Ask Now →
          </button>
          </a>

        </div>
      </div>
    </div>
  );
};

export default AskAIPage;
