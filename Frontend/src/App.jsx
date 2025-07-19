import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AskAI from "./Components/AskAI";
import SignIn from "./Pages/Users/SignIn";
import SignUp from "./Pages/Users/SignUp"; // Assuming you have a SignUp component
import Dashboard from "./Pages/Users/Dashboard"; // Assuming you have a Dashboard component
import Explore from "./Pages/Users/Explore";
import MyBooking from "./Pages/Users/MyBooking";
import PastBooking from "./Pages/Users/PastBooking";
import AskAIPage from "./Pages/AskAIPage";
import Chatbot from "./Pages/Chatbot"; // Importing the Chatbot component
import Booking from "./Pages/Users/Booking"; // Assuming you have a Booking component
import BookingForm from "./Pages/Users/BookingForm"; // Assuming you have a BookingForm component
import BookingSuccess from "./Pages/Users/BookingSuccess"; // Assuming you have a BookingSuccess 
import SignupProvider from "./Pages/Provider/SignUp-Provider";
import ChooseRole from "./Pages/ChooseRole";
import ProviderDashboard from "./Pages/Provider/DashboardProvider";
import ChatBox from "./Pages/ChatApp"; // Importing the ChatBox component
import ProtectedRoute from "./ProtectedRoute"; // Importing the ProtectedRoute component



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/askAI" element={<AskAI />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<ProtectedRoute allowedRoles={['customer','Customer']}>
    <Dashboard />
  </ProtectedRoute>} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/my-bookings" element={<MyBooking />} />
        <Route path="/past-bookings" element={<PastBooking />} />
        <Route path="/askAIPage" element={<AskAIPage />} />
        <Route path="/chatbot" element={<Chatbot />} /> {/* Adding the Chatbot route */}
        <Route path="/book" element={<Booking />} /> {/* Assuming you have a MyBooking component */}
        <Route path="/booking-form" element={<BookingForm />} /> {/* Assuming you have a BookingForm component */}
        <Route path="/booking-success" element={<BookingSuccess />} />
        <Route path="/signup-provider" element={<SignupProvider />} /> {/* Adding the SignupProvider route */}
        <Route path="/choose-role" element={<ChooseRole />} /> {/* Adding the ChooseRole route }

        {/* Add more routes as needed */} 
        <Route path="/dashboard-provider" element={<ProtectedRoute allowedRoles={['serviceProvider']}>
    <ProviderDashboard />
  </ProtectedRoute>} /> {/* Adding the ProviderDashboard route */}
        
        <Route path="/chat-app" element={<ChatBox />} /> {/* Adding the ChatBox route */}        
      </Routes>
    </Router>
  );
} 

export default App;
