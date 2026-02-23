import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./pages/Navbar"
import Sidebar from "./pages/Sidebar"
export default function App() {
  const [user, setUser] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  return (
      <>
    <Sidebar/>
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
    
      </>
  );
}
