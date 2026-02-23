import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Register from "./pages/Register"
import Sidebar from "./pages/Sidebar"
import Home from "./pages/Home"
import Graph from "./pages/Graph"
export default function App() {
  const  [user, setUser] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  return (
      <div className="flex flex-col md:flex-row pt-16 md:pt-0">
    <Sidebar/>
    
    <Routes>
     <Route path="/" element={<Home/>} />
    <Route path="/results" element={<Graph/>} />
   <Route path="/register" element={<Register/>} />
    </Routes>
      </div>
  );
}
