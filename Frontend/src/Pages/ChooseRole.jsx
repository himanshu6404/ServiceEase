'use client';
import { useNavigate } from 'react-router-dom';

export default function ChooseRole() {
  const navigate = useNavigate();

  const handleChoice = (role) => {
    if (role === 'customer') {
      navigate('/signup');
    } else if (role === 'provider') {
      navigate('/signup-provider');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#161B22] flex items-center justify-center px-4">
      
      {/* Top-left Branding */}
      <div className="absolute top-4 left-6 z-10">
        <a href="/">
          <h1 className="text-2xl font-bold text-white cursor-pointer">ServiceEase</h1>
        </a>
      </div>

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

      {/* Role Selection Card */}
      <div className="relative z-10 bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Welcome to ServiceEase</h1>
        <p className="text-gray-600 mb-6">Please select your role to continue</p>

        <div className="space-y-4">
          <button
            onClick={() => handleChoice('customer')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition cursor-pointer"
          >
            I am a Customer
          </button>

          <button
            onClick={() => handleChoice('provider')}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition cursor-pointer"
          >
            I am a Service Provider
          </button>
        </div>
      </div>
    </div>
  );
}
