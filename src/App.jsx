import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";

function App() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Dashboard />} />
  
    </Routes>
  );
}

export default App;