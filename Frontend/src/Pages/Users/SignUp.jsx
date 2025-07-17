'use client';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNo: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      role: "customer",
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      password: formData.password.trim(),
      phoneNo: formData.phoneNo.trim(),
    };

    try {
      const response = await fetch('http://localhost:7000/api/v1/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        alert(errorData?.message || "Sign Up failed.");
        return;
      }

      const data = await response.json();
      alert("Sign Up successful!");
// localStorage.setItem('token', data?.data?.accessToken);
      // Optionally redirect user to dashboard or login
      navigate('/signin');
    } catch (err) {
      console.error("Signup Error:", err);
      alert("Something went wrong. Try again!");
    }
  };

  return (
    <div className="min-h-screen bg-[#161B22] flex items-center justify-center px-4 relative">
      <div className="absolute top-4 left-6">
        <a href="/">
          <h1 className="text-2xl font-bold text-white cursor-pointer">ServiceEase</h1>
        </a>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-6 text-center text-gray-800">
          Customer Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="phoneNo"
            type="text"
            placeholder="Phone Number"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition cursor-pointer"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
