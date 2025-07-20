import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  FaBroom,
  FaTruckMoving,
  FaPaintRoller,
  FaTools,
  FaLightbulb,
  FaFaucet,
  FaHammer,
  FaSnowflake,
  FaGlobeAsia,
  FaTv,
  FaCarAlt,
  FaDoorOpen,
} from "react-icons/fa";

const allServices = [
  { name: "Cleaning", icon: <FaBroom className="text-pink-500" /> },
  { name: "Shifting", icon: <FaTruckMoving className="text-red-500" /> },
  { name: "Painting", icon: <FaPaintRoller className="text-teal-500" /> },
  { name: "Repair", icon: <FaTools className="text-yellow-500" /> },
  { name: "Electric", icon: <FaLightbulb className="text-blue-500" /> },
  { name: "Plumbing", icon: <FaFaucet className="text-yellow-600" /> },
  { name: "Carpentry", icon: <FaHammer className="text-orange-600" /> },
  { name: "AC Service", icon: <FaSnowflake className="text-cyan-600" /> },
  { name: "Internet Setup", icon: <FaGlobeAsia className="text-green-600" /> },
  { name: "TV Mounting", icon: <FaTv className="text-purple-600" /> },
  { name: "Car Wash", icon: <FaCarAlt className="text-indigo-600" /> },
  { name: "Door Lock Repair", icon: <FaDoorOpen className="text-rose-600" /> },
];

const BookingPage = () => {
  const [providers, setProviders] = useState([]);
  const [selectedService, setSelectedService] = useState("");
  const navigate = useNavigate(); // ✅ Added

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const res = await axios.get("https://serviceease-irto.onrender.com/api/service-providers");
        setProviders(res.data);
      } catch (err) {
        console.error("Error fetching providers", err);
      }
    };

    fetchProviders();
  }, []);

  const handleBookClick = (provider) => {
    navigate("/booking-form", { state: { provider, service: selectedService } });
  };

  return (
    <div className="relative min-h-screen bg-[#161B22] text-white px-4 py-10 sm:px-6 lg:px-8 flex flex-col items-center">
      {/* Background Blur */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          className="relative left-[calc(50%-11rem)] w-[36rem] sm:w-[72rem] aspect-[1155/678] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-400 to-indigo-400 opacity-25"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Top-left Title */}
      <div className="absolute top-4 left-6">
        <a href="/">
          <h1 className="text-2xl font-bold text-white cursor-pointer">ServiceEase</h1>
        </a>
      </div>

      <div className="w-full max-w-4xl mt-10">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Book Your Service Provider
        </h2>

        {/* Service Selection */}
        <div className="mb-10">
          <label className="block mb-2 text-base font-medium text-white">
            Choose Service Type
          </label>
          <select
            className="w-full p-3 rounded-xl text-white bg-[#1f2937] border border-gray-600"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
          >
            <option value="">-- Select a Service --</option>
            {allServices.map((service, idx) => (
              <option key={idx} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        {/* Service Providers */}
        {selectedService && (
          <>
            <h3 className="text-xl font-semibold mb-4">
              Available {selectedService} Providers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {providers
                .filter((p) => p.serviceType === selectedService) // ✅ Adjust field name based on backend
                .map((provider, idx) => (
                  <div
                    key={idx}
                    className="bg-purple-100 rounded-2xl p-4 shadow-xl text-black flex items-center gap-4 transition transform hover:scale-[1.02]"
                  >
                    {/* <img
                      src={provider.photo || "https://randomuser.me/api/portraits/men/23.jpg"} // Fallback image
                      alt={provider.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-600"
                    /> */}
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{provider.name}</h3>
                      <p className="text-sm text-gray-600">{provider.serviceType}</p>
                      <p className="text-sm text-gray-600">📞 {provider.phoneNo}</p>
                    </div>

                    <button
                      className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition cursor-pointer"
                      onClick={() => handleBookClick(provider)}
                    >
                      Book
                    </button>
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
