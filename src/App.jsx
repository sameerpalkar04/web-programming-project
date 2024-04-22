import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import About from "./About";
import Restaurants from "./Restaurants";
import Review from "./Review";
//import Navbar from "./Components/Navbar";

function App() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/about" element={<About />} />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route path="/review" element={<Review />} />
    </Routes>
  );
}

export default App;