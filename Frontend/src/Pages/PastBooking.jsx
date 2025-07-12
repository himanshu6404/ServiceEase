'use client';
import React from 'react';

const pastBookings = [
  {
    id: 1,
    service: 'Painting',
    provider: 'Rohit Mehra',
    date: '2025-06-10',
  },
  {
    id: 2,
    service: 'Electric',
    provider: 'Ajay Singh',
    date: '2025-06-20',
    },
    {
      id: 3,
        service: 'Plumbing',
    provider: 'Vikas Yadav',
    date: '2025-06-25',
  },
];

export default function PastBooking() {
  return (
    <div className="min-h-screen bg-[#161B22] text-white relative px-4 py-12 sm:px-6 lg:px-8">
      {/* Background Blur Top */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          className="relative left-[calc(50%-11rem)] w-[36rem] sm:w-[72rem] aspect-[1155/678] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>

      {/* Title Top Left */}
      <div className="absolute top-4 left-6">
        <a href="/">
          <h1 className="text-2xl font-bold text-white cursor-pointer">ServiceEase</h1>
        </a>
      </div>

      <h2 className="text-4xl font-bold text-center mb-6">
        <span className="text-white">Past </span>
        <span className="text-blue-600">Bookings</span>
      </h2>
      <div className="max-w-5xl mx-auto overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl overflow-hidden shadow-lg text-gray-800">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left">S.No</th>
              <th className="px-4 py-3 text-left">Service</th>
              <th className="px-4 py-3 text-left">Provider</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Rebook</th>
            </tr>
          </thead>
          <tbody>
            {pastBookings.map((item, index) => (
              <tr key={item.id} className="border-b hover:bg-gray-100">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{item.service}</td>
                <td className="px-4 py-3">{item.provider}</td>
                <td className="px-4 py-3">{item.date}</td>
                <td className="px-4 py-3">
                  <button className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 cursor-pointer">
                    Rebook
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
