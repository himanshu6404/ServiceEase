'use client';
import { useState } from 'react';

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
    // Optionally send to backend
  };

  return (
    <div id='contact' className="min-h-screen bg-purple-100 py-16 px-4 flex justify-center items-center">
      <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-lg">
<h2 className="text-4xl font-bold text-center mb-12">
  <span className="text-black">Contact </span>
  <span className="text-pink-500">Us</span>
</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
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
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-pink-600 text-white w-full py-2 rounded-md hover:bg-pink-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
