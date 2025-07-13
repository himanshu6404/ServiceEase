'use client';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaCalendarAlt, FaHistory, FaRobot, FaComments, FaTasks } from 'react-icons/fa';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        alert("Unauthorized! Please log in.");
        navigate("/signin");
        return;
      }

      try {
        const res = await fetch('http://localhost:5000/api/v1/users/me', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        });

        if (!res.ok) {
          alert("Session expired. Please log in again.");
          localStorage.removeItem('token');
          navigate("/signin");
          return;
        }

        const data = await res.json();
        setUser(data?.data);
      } catch (err) {
        console.error("Error fetching user:", err);
        alert("Something went wrong.");
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert("Logged out successfully.");
    navigate("/signin");
  };

  const dashboardItems = [
    { icon: <FaSearch />, title: "Explore Services", link: "/explore" },
    { icon: <FaTasks />, title: "Book a Service", link: "/book" },
    { icon: <FaCalendarAlt />, title: "My Bookings", link: "/my-bookings" },
    { icon: <FaHistory />, title: "Past Bookings", link: "/past-bookings" },
    { icon: <FaRobot />, title: "Ask AI", link: "/askAIPage" },
    { icon: <FaComments />, title: "Chat with Provider", link: "/chat" },
  ];

  return (
    <div className="min-h-screen bg-[#161B22] text-white relative px-4 py-10 sm:px-6 lg:px-8">
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

      {/* Header */}
      <header className="flex justify-end-safe items-center mb-8">
            {/* Title Top Left */}
      <div className="absolute top-4 left-6">
        <a href="/">
          <h1 className="text-2xl font-bold text-white cursor-pointer">ServiceEase</h1>
        </a>
      </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition cursor-pointer"
        >
          Logout
        </button>
      </header>

      {/* Welcome */}
      {user && (
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold">Welcome, {user.name} 👋</h2>
          {/* <p className="text-gray-300 mt-1">{user.email} ({user.role})</p> */}
        </div>
      )}

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardItems.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.link)}
            className="cursor-pointer bg-white text-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition hover:scale-[1.02]"
          >
            <div className="flex items-center space-x-4">
              <div className="text-blue-600 text-2xl">{item.icon}</div>
              <div>
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
