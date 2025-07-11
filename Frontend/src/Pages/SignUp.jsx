'use client';
import { useState } from 'react';

export default function Signup() {
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNo: '',
    serviceType: '',
    experience: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup form submitted:', { role, ...formData });
  };

  const serviceOptions = [
    'Cleaning',
    'Shifting',
    'Painting',
    'Repair',
    'Electric',
    'Plumbing',
    'Carpentry',
  ];

  return (
    <div className="min-h-screen bg-[#161B22] flex items-center justify-center px-4 relative">
      {/* 🔷 Top-Left Fixed Title */}
     <div className="absolute top-4 left-6">
        <a href="/"><h1 className="text-2xl font-bold text-white cursor-pointer">ServiceEase</h1>
</a>
      </div>

      {/* 🔷 Signup Card */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-6 text-center text-gray-800">
          Are you a Customer or Service Provider?
        </h2>

        {/* Role selection */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setRole('customer')}
            className={`px-4 py-2 rounded-md border font-medium transition cursor-pointer ${
              role === 'customer'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-black hover:bg-gray-500'
            }`}
          >
            Customer
          </button>
          <button
            onClick={() => setRole('provider')}
            className={`px-4 py-2 rounded-md border font-medium transition cursor-pointer ${
              role === 'provider'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-black hover:bg-gray-500'
            }`}
          >
            Service Provider
          </button>
        </div>

        {role && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              type="text"
              placeholder="Name"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              name="phoneNo"
              type="text"
              placeholder="Phone No."
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {/* Provider-specific fields */}
            {role === 'provider' && (
              <>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Type of Service</option>
                  {serviceOptions.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <input
                  name="experience"
                  type="text"
                  placeholder="Years of Experience"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition cursor-pointer"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
