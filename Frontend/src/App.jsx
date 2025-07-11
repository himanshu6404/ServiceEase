import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AskAI from "./Components/AskAI";
// import SignIn from "./SignIn.jsx";
// import Dashboard from "./Dashboard.jsx";
// import SignUp from "./SignUp.jsx";
// import Booking from "./Booking.jsx";
// import HotelBook from "./HotelBook.jsx";
// import PaymentPage from "./PaymentPage.jsx";
// import SuccessPage from "./SucessPage.jsx";
// import GenerateItinerary from "./GenerateItinerary.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/askAiI" element={<AskAI />} />
        {/* <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/hotelbooking" element={<HotelBook />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/generate-itinerary" element={<GenerateItinerary />} /> */}
      </Routes>
    </Router>
  );
} 

export default App;
