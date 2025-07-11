import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AskAI from "./Components/AskAI";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp"; // Assuming you have a SignUp component


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/askAiI" element={<AskAI />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Add more routes as needed */}
        
      </Routes>
    </Router>
  );
} 

export default App;
