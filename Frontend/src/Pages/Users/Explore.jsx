'use client';
import { useState } from "react";
import {
  FaBroom, FaTruckMoving, FaPaintRoller, FaTools,
  FaLightbulb, FaFaucet, FaHammer, FaSnowflake,
  FaGlobeAsia, FaTv, FaCarAlt, FaDoorOpen
} from "react-icons/fa";

const allServices = [
  { name: "Cleaning", icon: <FaBroom className="text-3xl text-pink-500" />, description: "Deep clean your space effortlessly" },
  { name: "Shifting", icon: <FaTruckMoving className="text-3xl text-red-500" />, description: "Move your stuff quickly and safely" },
  { name: "Painting", icon: <FaPaintRoller className="text-3xl text-teal-500" />, description: "Give your walls a fresh and aesthetic color" },
  { name: "Repair", icon: <FaTools className="text-3xl text-yellow-500" />, description: "Fix appliances,devices and equipment" },
  { name: "Electric", icon: <FaLightbulb className="text-3xl text-blue-500" />, description: "Electrical fixes and installations" },
  { name: "Plumbing", icon: <FaFaucet className="text-3xl text-yellow-600" />, description: "Leaks, taps, and pipe solutions" },
  { name: "Carpentry", icon: <FaHammer className="text-3xl text-orange-600" />, description: "Furniture repair and woodwork" },
  { name: "AC Service", icon: <FaSnowflake className="text-3xl text-cyan-600" />, description: "Cooling issues & maintenance" },
  { name: "Internet Setup", icon: <FaGlobeAsia className="text-3xl text-green-600" />, description: "Wi-Fi and broadband installation" },
  { name: "TV Mounting", icon: <FaTv className="text-3xl text-purple-600" />, description: "Wall mount TVs & cable management" },
  { name: "Car Wash", icon: <FaCarAlt className="text-3xl text-indigo-600" />, description: "On-demand doorstep car washing" },
  { name: "Door Lock Repair", icon: <FaDoorOpen className="text-3xl text-rose-600" />, description: "Fix or replace jammed door locks" },
];

const Explore = () => {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredServices = allServices.filter(service =>
    service.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSuggestionClick = (name) => {
    setQuery(name);
    setShowSuggestions(false);
  };

  return (
      <div id="services" className="min-h-screen bg-[#161B22] text-white relative px-4 py-10 sm:px-6 lg:px-8">
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
      {/* Title Top Left */}
      <div className="absolute top-4 left-6">
        <a href="/">
          <h1 className="text-2xl font-bold text-white cursor-pointer">ServiceEase</h1>
        </a>
      </div>

      {/* Page Title */}
      <h2 className="text-4xl font-bold text-center mb-6">
        <span className="text-white">Our </span>
        <span className="text-blue-600">Services</span>
      </h2>

      {/* Search with Suggestions */}
      <div className="flex justify-center mb-10 relative">
        <div className="w-full sm:w-[400px]">
          <input
            type="text"
            placeholder="Search for a service..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowSuggestions(true);
            }}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Autocomplete Suggestions */}
          {showSuggestions && query && (
            <ul className="absolute z-10 bg-[#161B22] w-1/3 mt-1 border border-gray-300 rounded shadow">
              {filteredServices.length > 0 ? (
                filteredServices.map((service, idx) => (
                  <li
                    key={idx}
                    className="px-4 py-2 hover:bg-gray-500 cursor-pointer"
                    onClick={() => handleSuggestionClick(service.name)}
                  >
                    {service.name}
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-gray-500">No matches found</li>
              )}
            </ul>
          )}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {filteredServices.length > 0 ? (
          filteredServices.map((service, index) => (
            <div
              key={index}
              className="bg-purple-100 rounded-xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl hover:scale-105 transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              <a href="/book">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer transition">
                Book Now
              </button>

              </a>

            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No matching services found.</p>
        )}
      </div>
    </div>
  );
};

export default Explore;
