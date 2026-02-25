import { NavLink } from "react-router-dom";
import {ethers} from "ethers"
import { Home, Vote, Wallet, BarChart3,Menu,X,Moon,SunDim,Monitor } from "lucide-react";
import {useState,useEffect} from "react"
    const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    const ABI = ["function getCount() view returns (uint256)"]
export default function Sidebar({contract,setContract,contractWS,setContractWS}) {
    const [opend,setOpend] = useState<boolean>(false)
    const [mode,setMode] = useState<string>("")
    const [account,setAccount] = useState()
    const [provider,setProvider] = useState()

    async function connect_wallet(){
        if(!window.ethereum){
            return alert("Install wallet")
        }
        const provider = new ethers.BrowserProvider(window.ethereum)
    await provider.send('eth_requestAccounts',[])
    const signer = await provider.getSigner()
    const Contract = new ethers.Contract(CONTRACT_ADDRESS,ABI,provider)
    setContractWS(await Contract.connect(signer))
    setContract(Contract)
    setAccount(await signer.getAddress());
     }


    function handleToggle(theme:string){
        const tempTheme = theme
        if(theme == "default"){
        const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches        
        isDarkMode ? theme = "dark" : "light" 
        }
        const root = window.document.documentElement;
        root.classList.remove("light");
        root.classList.remove("dark");
        root.classList.add(theme);
        localStorage.setItem("theme",tempTheme);
        setMode(tempTheme);
    }
    useEffect(() => {
     let savedTheme = localStorage.getItem("theme");
     if(!savedTheme){
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
         setMode("default")
         savedTheme =  isDarkMode ? "dark" : "light";
     }
     const theme = (savedTheme=="default" || savedTheme=="dark")? "dark" : "light";
     window.document.documentElement.classList.add(theme);
     setMode(savedTheme);
    }, [])



   const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
   useEffect(()=>{
       if(mode=="default"){
    colorSchemeQuery.addEventListener('change', () => {
    handleToggle("default")
});
       }
   },[mode]) 




  return (
      <div className="md:h-screen md:w-64 w-[88%] z-1000 bg-amber-500">
    <aside className="fixed top-0 w-screeen h-fit flex w-screen md:h-screen md:w-64 dark:bg-gradient-to-b dark:from-gray-950 dark:via-gray-900 to-gray-950 bg-gray-50 bg-none text-foreground flex md:flex-col border border-border shadow-lg shadow-gray-200 dark:shadow-gray-800">
         <div className="flex items-center font-bold  bg-cover px-4">
    <div className={`w-12 h-12 bg-ballot bg-cover`}></div>
    DimtsChain
    </div> 
 
    <div className={`h-full absolute transition-all duration-200 md:translate-x-0  flex w-[70%] flex-col left-ful right-0 dark:bg-gradient-to-b dark:from-gray-950 dark:via-gray-900 bg-none bg-white to-gray-950  h-screen md:right-auto md:relative md:w-full md:px-0 md:bg-white transform  ${opend ? "translate-x-0":"translate-x-full"}`}>
      <div className="p-6">
        <h1 className="text-2xl font-bold flex bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
          Web3Vote 
          <button className="text-foreground md:hidden ml-auto cursor-pointer rounded p-2" onClick={()=>setOpend(!opend)}>
          <X size="20" />
          </button>
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Decentralized Voting
        </p>
      </div>

      <nav className="flex-1 px-4 space-y-2">
      <div className="flex justify-between items-center w-full mx-au bg-gray-100 dark:bg-zinc-800 p-2 rounded-2xl shadow-inner">

  <button
    className={`w-10 h-10 flex items-center justify-center rounded-full 
               bg-${mode=="dark"?"gray-900 text-white":"text-gray-600"} 
               text-gray-600 dark:text-gray-300 
               border border-gray-300 dark:border-zinc-600
               transition-all duration-300 ease-out
               hover:scale-110 hover:-translate-y-1
               active:scale-95 cursor-pointer`}
    onClick={()=>handleToggle("dark")}
  >
    <Moon size={18} />
  </button>

  <button
    className={`w-10 h-10 flex items-center justify-center rounded-full 
               bg-${mode=="light"?"gray-900 text-white":"text-gray-600"} 
               text-gray-600 dark:text-gray-300 
               border border-gray-300 dark:border-zinc-600
               transition-all duration-300 ease-out
               hover:scale-110 hover:-translate-y-1
               active:scale-95 cursor-pointer`}
    onClick={()=>handleToggle("light")}

  >
    <SunDim size={18} />
  </button>

  <button
    className={`w-10 h-10 flex items-center justify-center rounded-full 
               bg-${mode=="default"?"gray-900 text-white":"text-gray-600"}
               text-gray-600 dark:text-gray-300 
               border border-gray-300 dark:border-zinc-600
               transition-all duration-300 ease-out
               hover:scale-110 hover:-translate-y-1
               active:scale-95 cursor-pointer`}
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
                ? "bg-gradient-to-r from-cyan-600/50 to-blue-700/50 text-white"
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
                ? "bg-gradient-to-r from-cyan-600/50 to-blue-700/50 text-white"
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
                ? "bg-gradient-to-r from-cyan-600/50 to-blue-700/50 text-white"
                : "hover:bg-gray-800 text-gray-600 hover:text-gray-300 dark:text-gray-300"
            }`
          }
        >
          <BarChart3 size={18} />
          Results
        </NavLink>
      </nav>

      {/* Wallet Section */}
      <div className="p-4 border-t border-border mt-auto">
        <button onClick={connect_wallet} className="w-full flex items-center text-white justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:bg-purple-700 transition-all py-2 rounded-xl font-medium">
          <Wallet size={18} />
          {account ? account.substr(0, 4) + "..." + account.substr(-2) : "Connect Wallet"}
        </button>
      </div>
      </div>

      <button className="ml-auto text-foreground cursor-pointer px-3 md:hidden mr-2 text-foreground" onClick={()=>setOpend(!opend)}>
      <Menu size={20}/>
      </button>
    </aside>
    </div>
  );
}

