import { IdCard } from 'lucide-react';

export default function Regiter() {
  return (
    <div className="w-full h-screen fixed md:relative top-0 p-12 flex items-center justify-center">
    <div className="w-full py-14 md:py-20 max-w-md gap-3 bg-[#1E1E1E] p-2 flex flex-col items-center shadow-lg rounded-lg">
    <h1 className="text-2xl">Log In</h1>
    <p>Log in with you National Id to vote</p>
    <div className="w-full my-auto px-5 mt-7">
    <div className="w-full flex items-center gap-3 px-2 bg-red-40 my-auto border shadow-lg rounded-lg h-12">
    <IdCard/>
    <input className="w-full h-full focus:outline-0"/>
    </div>
    </div>
    </div>
    </div>
  )
}

