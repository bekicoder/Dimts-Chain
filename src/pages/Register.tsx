import { IdCard } from 'lucide-react';

export default function Regiter() {
  return (
    <div className="w-full text-black dark:text-white h-screen fixed md:relative top-0 p-12 flex items-center justify-center dark:bg-zinc-950 bg-white">
    <div className="w-full py-14 md:py-20 max-w-md gap-3 bg-white dark:bg-zinc-900 p-2 flex flex-col items-center shadow-lg rounded-2xl border border-zinc-200 dark:border-zinc-800">
    <h1 className="text-3xl leading-normal bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Log In</h1>
    <p>Log in with your National Id to vote</p>
    <div className="w-full my-auto px-5 mt-">
    <div className="w-full flex items-center gap-3 px-2 bg-red-40 my-auto border border-gray-400 rounded-lg h-12">
    <IdCard/> 
    <input type="" className="w-full h-full focus:outline-0"/>
    </div>
    </div>
    </div>
    </div>
  )
}

