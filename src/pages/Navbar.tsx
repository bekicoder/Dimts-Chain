import {useState} from 'react'
export default function Navbar() {
    const [opend, setOpend] = useState(false)
  return (
    <nav className="h-14 w-full relative flex items-center">
    <div className="flex items-center font-bold">
    <img className="w-12" src="https://www.shutterstock.com/image-vector/putting-vote-into-ballot-box-600nw-2427149197.jpg" />
    DimtsChain
    </div>
    <ul className={`w-[50%] flex flex-col items-start md:flex-row max-md:transition-all max-md:duration-1000 h-screen gap-2 md:gap-4 md:bg-transparent md:justify-center md:flex-1  md:h-fit md:right-0 md:left-auto absolute md:relative bg-gray-50 top-0 p-3 ${opend ? "right-0":"left-full"}`}>
    <button className="cursor-pointer md:hidden mb-4" onClick={()=>setOpend(!opend)}>
    <i className="fa-solid fa-times"/>
    </button>
    <li className="">
    Home
    </li>
 <li className="">
 Register
    </li>

    </ul>
    <button className="ml-auto p-3 md:hidden cursor-pointer" onClick={()=>setOpend(!opend)}>
    <i className="fa-solid fa-bars"/>
    </button>
    </nav>
  )
}

