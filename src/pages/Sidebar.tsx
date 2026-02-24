import { NavLink } from "react-router-dom";
import { Home, Vote, Wallet, BarChart3,Menu,X,Sun,Moon,SunDim,MoonStar,Eclipse,Monitor } from "lucide-react";
import {useState,useEffect} from "react"
export default function Sidebar() {
    const [opend,setOpend] = useState<boolean>(false)
    function handleOpen() {
         
    }             
    function handleToggle(theme){
        const root = window.document.documentElement
        window.document.documentElement.classList.add(savedTheme)
        }

    useEffect(() => {
     const savedTheme = localStorage.getItem("theme") 
     window.document.documentElement.classList.add(savedTheme)
    }, [])
    
  return (
      <div className="bg-red-500 md:h-screen md:w-64 w-fit z-1000">
    <aside className="fixed top-0 w-screeen h-fit flex w-screen md:h-screen md:w-64 dark:bg-gradient-to-b dark:from-gray-950 dark:via-gray-900 to-gray-950 bg-gray-50 bg-none text-foreground flex md:flex-col border-r border-gray-800 shadow-xl">
         <div className="flex items-center font-bold  bg-cover">
    <div className={`w-12 h-12 bg-background bg-cover`}></div>
    DimtsChain
    </div> 
 
    <div className={`h-full absolute transition-all duration-200 md:translate-x-0  flex w-[60%] flex-col left-ful right-0 dark:bg-gradient-to-b dark:from-gray-950 dark:via-gray-900 bg-none bg-white to-gray-950  h-screen md:right-auto md:relative md:w-full md:px-0 md:bg-white transform  ${opend ? "translate-x-0":"translate-x-full"}`}>
      {/* Logo Section */}
      <div className="p-6">
        <h1 className="text-2xl font-bold flex bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Web3Vote 
          <button className="text-foreground md:hidden ml-auto cursor-pointer rounded p-2" onClick={()=>setOpend(!opend)}>
          <X size="20"/>
          </button>
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Decentralized Voting
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2">
      <div className="flex justify-between items-center w-full max-w-xs mx-auto bg-gray-100 dark:bg-zinc-800 p-2 rounded-2xl shadow-inner">

  {/* Moon */}
  <button
    className="w-10 h-10 flex items-center justify-center rounded-full 
               bg-gray-900 text-white 
               transition-all duration-300 ease-out
               hover:scale-110 hover:-translate-y-1
               active:scale-95 cursor-pointer"
    onClick={()=>handleToggle("dark")}
  >
    <Moon size={18} />
  </button>

  {/* Sun */}
  <button
    className="w-10 h-10 flex items-center justify-center rounded-full 
               bg-white dark:bg-zinc-700 
               text-gray-600 border border-gray-300 dark:border-zinc-600
               transition-all duration-300 ease-out
               hover:scale-110 hover:-translate-y-1
               active:scale-95 cursor-pointer"
    onClick={()=>handleToggle("light")}

  >
    <SunDim size={18} />
  </button>

  {/* System */}
  <button
    className="w-10 h-10 flex items-center justify-center rounded-full 
               bg-white dark:bg-zinc-700 
               text-gray-600 dark:text-gray-300 
               border border-gray-300 dark:border-zinc-600
               transition-all duration-300 ease-out
               hover:scale-110 hover:-translate-y-1
               active:scale-95 cursor-pointer"
    onClick={()=>handleToggle("default")}

  >
    <Monitor size={18} />
  </button>

</div>

                   <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              isActive
                ? "bg-purple-600/20 text-purple-500 dark:text-purple-400"
                : "hover:bg-gray-800 text-gray-600 hover:text-gray-300 dark:text-gray-300"
            }`
          }
        >
          <Home size={18} />
          Dashboard
        </NavLink>

        <NavLink
          to="/register"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              isActive
                ? "bg-purple-600/20 text-purple-500 dark:text-purple-400"
                : "hover:bg-gray-800 text-gray-600 hover:text-gray-300 dark:text-gray-300"
            }`
          }
        >
          <Vote size={18} />
         Register
        </NavLink>

        <NavLink
          to="/results"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              isActive
                ? "bg-purple-600/20 text-purple-500 dark:text-purple-400"
                : "hover:bg-gray-800 text-gray-600 hover:text-gray-300 dark:text-gray-300"
            }`
          }
        >
          <BarChart3 size={18} />
          Results
        </NavLink>
      </nav>

      {/* Wallet Section */}
      <div className="p-4 border-t border-gray-800 mt-auto">
        <button className="w-full flex items-center text-white justify-center gap-2 bg-purple-600 hover:bg-purple-700 transition-all py-2 rounded-xl font-medium">
          <Wallet size={18} />
          Connect Wallet
        </button>
      </div>
      </div>

      <button className="ml-auto cursor-pointer px-3 md:hidden mr-2 text-black dark:text-white" onClick={()=>setOpend(!opend)}>
      <Menu size={20}/>
      </button>
    </aside>
    </div>
  );
}

