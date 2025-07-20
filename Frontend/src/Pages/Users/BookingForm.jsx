import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { service, provider } = location.state || {};

  const storedUser = JSON.parse(localStorage.getItem("user")); // adjust key based on your app
  const customerId = storedUser?._id;


  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [additionalInfo, setAdditionalInfo] = React.useState("");

  const handleBook = async () => {
    if (!date || !time || !address) {
      return alert("Please fill all required fields.");
    }

    try {
      const response = await fetch("http://localhost:4000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerId, // from logged-in user (passed as prop)
          serviceProviderId: provider?._id,
          serviceType: service,
          date,
          time,
          address,
          additionalInfo,
        }),
      });

      const data = await response.json();

      if (data.success) {
        navigate("/booking-success", {
          state: {
            service,
            provider,
            date,
            time,
          },
        });
      } else {
        alert("Booking failed: " + data.error);
      }
    } catch (err) {
      console.error(err);
      alert("Server error during booking.");
    }
  };

  return (
    <div className="relative min-h-screen bg-[#161B22] text-white px-4 py-10 flex flex-col items-center">
      {/* Background + Header */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          className="relative left-[calc(50%-11rem)] w-[36rem] sm:w-[72rem] aspect-[1155/678] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-400 to-indigo-400 opacity-25"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1)"
          }}
        />
      </div>

      <div className="absolute top-4 left-6">
        <a href="/">
          <h1 className="text-2xl font-bold text-white cursor-pointer">ServiceEase</h1>
        </a>
      </div>

      {/* Form */}
      <div className="bg-white text-black mt-20 p-8 rounded-2xl shadow-lg max-w-xl w-full">
        <h2 className="text-2xl font-bold mb-6">Confirm Your Booking</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Service Type</label>
          <input
            type="text"
            value={service}
            readOnly
            className="w-full p-3 border rounded-lg bg-gray-100"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Service Provider</label>
          <input
            type="text"
            value={provider?.name}
            readOnly
            className="w-full p-3 border rounded-lg bg-gray-100"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Service Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Full address"
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Additional Info (optional)</label>
          <textarea
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            className="w-full p-3 border rounded-lg"
            placeholder="Any special instructions?"
          ></textarea>
        </div>

        <div className="text-sm mb-6 text-gray-600">
          Note: Visiting charges are <strong>₹100</strong>. Final charges depend on service.
        </div>

        <div className="bg-blue-50 p-4 rounded-xl mb-4">
          <h3 className="font-semibold text-lg mb-2">Payment</h3>
          <p className="mb-2">Visit Fee: ₹100</p>
          <button
            onClick={handleBook}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 cursor-pointer"
          >
            Make Payment & Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
