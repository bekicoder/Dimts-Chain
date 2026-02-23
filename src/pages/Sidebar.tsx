import { NavLink } from "react-router-dom";
import { Home, Vote, Wallet, BarChart3 } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white flex flex-col justify-between border-r border-gray-800 shadow-xl">
          <div className="flex items-center font-bold">
    <div className={`w-12 h-12 bg-[url(/light_mode_ballot.png)]`}></div>
    DimtsChain
    </div>
 
      {/* Logo Section */}
      <div className="p-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Web3Vote
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Decentralized Voting
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              isActive
                ? "bg-purple-600/20 text-purple-400"
                : "hover:bg-gray-800 text-gray-300"
            }`
          }
        >
          <Home size={18} />
          Dashboard
        </NavLink>

        <NavLink
          to="/voting"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              isActive
                ? "bg-purple-600/20 text-purple-400"
                : "hover:bg-gray-800 text-gray-300"
            }`
          }
        >
          <Vote size={18} />
          Vote
        </NavLink>

        <NavLink
          to="/results"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              isActive
                ? "bg-purple-600/20 text-purple-400"
                : "hover:bg-gray-800 text-gray-300"
            }`
          }
        >
          <BarChart3 size={18} />
          Results
        </NavLink>
      </nav>

      {/* Wallet Section */}
      <div className="p-4 border-t border-gray-800">
        <button className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 transition-all py-2 rounded-xl font-medium">
          <Wallet size={18} />
          Connect Wallet
        </button>
      </div>
    </aside>
  );
}

