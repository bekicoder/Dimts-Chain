import {useState} from "react"
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register"
import Sidebar from "./pages/Sidebar"
import Home from "./pages/Home"
import Graph from "./pages/Graph"
import CreateParty from "./pages/Admin"
export default function App() {
        const [contract,setContract] = useState();
        const [contractWS,setContractWS] = useState();
  return (
      <div className="flex flex-col md:flex-row pt-12 md:pt-0">
    <Sidebar contract={contract} contractWS={contractWS} setContractWS={setContractWS}  setContract={setContract}/>
    <Routes>
     <Route path="/" element={<Home contract={contract} contractWS={contractWS}/>} />
    <Route path="/results" element={<Home contract={contract} contractWS={contractWS} />} />
   <Route path="/register" element={<Home contract={contract} contractWS={contractWS} />} />
     <Route path="/admin" element={<Home contract={contract} contractWS={contractWS} />} />

    </Routes>
      </div>
  );
}
