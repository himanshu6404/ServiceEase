'use client';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNo: '',
    query: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div id='contact' className="min-h-screen bg-purple-100 py-16 px-6 sm:px-12 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-8 grid md:grid-cols-2 gap-10">
        {/* Left Side - Contact Form */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-black">Contact </span>
            <span className="text-pink-500">Us</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700">Your Name</label>
              <input
                type="text"
                name="name"
                required
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">Your Email</label>
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">Your Phone No.</label>
              <input
                type="text"
                name="phoneNo"
                required
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">Your Query</label>
              <textarea
                name="query"
                rows="4"
                required
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-pink-600 text-white w-full py-2 rounded-md hover:bg-pink-700 transition cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Side - Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="flex items-start space-x-4">
            <FaEnvelope className="text-2xl text-pink-500 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Email</h4>
              <p className="text-gray-600">support@ServiceEase.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaPhone className="text-2xl text-pink-500 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Phone</h4>
              <p className="text-gray-600">+1 234 567 890</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-2xl text-pink-500 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Address</h4>
              <p className="text-gray-600">
                NIT Jalandhar Campus,<br />
                Punjab, India - 144011
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
