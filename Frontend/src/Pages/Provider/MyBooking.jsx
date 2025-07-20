'use client';
import React, { useEffect, useState } from 'react';
import ChatBox from '../ChatApp.jsx'; // adjust path as necessary

export default function MyProviderBookings() {
  const [bookings, setBookings] = useState([]);
  const [user, setUser] = useState(null);
  const [showChat, setShowChat] = useState(false);
  const [currentChatRoom, setCurrentChatRoom] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user')); // assuming stored on login
    if (storedUser && storedUser._id) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    const fetchProviderBookings = async () => {
      if (!user?._id) return;
      try {
        const res = await fetch(`http://localhost:4000/api/bookings/provider/${user._id}`);
        const data = await res.json();
        setBookings(data);
      } catch (error) {
        console.error('Error fetching provider bookings:', error);
      }
    };

    fetchProviderBookings();
  }, [user]);

  const handleChatOpen = (customerId) => {
    const roomId = `${customerId}_${user._id}`; // consistent room ID
    setCurrentChatRoom(roomId);
    setShowChat(true);
  };

  return (
    <div className="min-h-screen bg-[#161B22] text-white relative px-4 py-12 sm:px-6 lg:px-8">
      {/* Background Blur */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div className="relative left-[calc(50%-11rem)] w-[36rem] sm:w-[72rem] aspect-[1155/678] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" />
      </div>

      {/* Title Top Left */}
      <div className="absolute top-4 left-6">
        <a href="/">
          <h1 className="text-2xl font-bold text-white cursor-pointer">ServiceEase</h1>
        </a>
      </div>

      <h2 className="text-4xl font-bold text-center mb-6">
        <span className="text-white">My </span>
        <span className="text-blue-600">Service Bookings</span>
      </h2>

      <div className="max-w-5xl mx-auto overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl overflow-hidden shadow-lg text-gray-800">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left">S.No</th>
              <th className="px-4 py-3 text-left">Service</th>
              <th className="px-4 py-3 text-left">Customer</th>
              <th className="px-4 py-3 text-left">Scheduled Date</th>
              <th className="px-4 py-3 text-left">Address</th>
              <th className="px-4 py-3 text-left">Phone No</th>
              <th className="px-4 py-3 text-left">Chat</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((item, index) => (
                <tr key={item._id} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">{item.serviceName}</td>
                  <td className="px-4 py-3">
                    {item.customerName
                      ? item.customerName.charAt(0).toUpperCase() + item.customerName.slice(1).toLowerCase()
                      : 'N/A'}
                  </td>
                  <td className="px-4 py-3">{new Date(item.date).toLocaleDateString()}</td>
                  <td className="px-4 py-3">{item.address || 'N/A'}</td>
                  <td className="px-4 py-3">{item.phoneNo || 'N/A'}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleChatOpen(item.customerId)}
                      className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 cursor-pointer"
                    >
                      Chat
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Chat Box */}
      {showChat && user && (
        <div className="fixed bottom-4 right-4 w-[400px] shadow-xl z-50">
          <ChatBox
            roomId={currentChatRoom}
            username={user.name}
            onClose={() => setShowChat(false)}
          />
        </div>
      )}
    </div>
  );
}
