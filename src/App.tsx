import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./pages/Navbar"
import Sidebar from "./pages/Sidebar"
import Home from "./pages/Home"
export default function App() {
  const  [user, setUser] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  return (
      <div className="flex flex-col md:flex-row pt-16 md:pt-0">
    <Sidebar/>
    <Home/>
    <Routes>
    {/* <Route path="/" element={<Register setUser={setUser} />} />
      <Route
        path="/voting"
        element={
          <Voting
            user={user}
            hasVoted={hasVoted}
            setHasVoted={setHasVoted}
          />
        }
      />*/}
   </Routes>
    
      </div>
  );
}
