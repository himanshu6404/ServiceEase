import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingSuccess = () => {
  const { state } = useLocation();
  const { provider, date, time, service } = state || {};
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#161B22] text-white flex items-center justify-center px-4 py-10 relative">
      {/* Top Bar */}
      <div className="absolute top-4 left-6">
        <a href="/">
          <h1 className="text-2xl font-bold text-white cursor-pointer">
            ServiceEase
          </h1>
        </a>
      </div>

      <div className="absolute top-4 right-6">
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition cursor-pointer"
        >
          Dashboard
        </button>
      </div>

      {/* Booking Confirmation Card */}
      <div className="bg-purple-100 text-black p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-6 text-green-600">
          Booking Successful 🎉
        </h2>
        <img
          src={provider?.photo}
          alt={provider?.name}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border"
        />
        <h3 className="text-lg font-semibold">{provider?.name}</h3>
        <p className="text-sm text-gray-600">{service}</p>
        <p className="text-sm">📅 {date} at ⏰ {time}</p>

        <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer">
          Chat with Provider
        </button>
      </div>
    </div>
  );
};

export default BookingSuccess;
