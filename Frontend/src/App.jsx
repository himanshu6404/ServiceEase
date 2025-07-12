import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AskAI from "./Components/AskAI";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp"; // Assuming you have a SignUp component
import Dashboard from "./Pages/Dashboard"; // Assuming you have a Dashboard component
import Explore from "./Pages/Explore";
import MyBooking from "./Pages/MyBooking";
import PastBooking from "./Pages/PastBooking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/askAI" element={<AskAI />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/my-bookings" element={<MyBooking />} />
        <Route path="/past-bookings" element={<PastBooking />} />
        {/* Add more routes as needed */}
        
      </Routes>
    </Router>
  );
} 

export default App;
