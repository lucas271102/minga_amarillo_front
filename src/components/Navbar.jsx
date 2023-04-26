import Menu from '../assets/Menu.png'
import Logo from '../assets/Logo.png'
import logo2 from '../assets/logo2.png'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen]= useState(false)
  const handleToggleMenu= ()=>{
    setIsOpen (!isOpen)
  }
  return (
    <>

<header className="absolute z-10 " >
      <nav className='flex  justify-center  '>
      
  <div className="relative w-screen ">
  
  <button
    className="inline-flex items-center justify-center p-2  text-gray-400 hover:text-white   "
    aria-expanded={isOpen}
    onClick={() => setIsOpen(!isOpen)}
  >
    <img  className='className={`${isOpen ? "hidden" : "block"} h-10 w-10`}' src={Menu} alt=""  />
   
  </button>

 
  <div
    className={`${isOpen ? "block" : "hidden"} absolute mt-2 w-48 bg-orange-500 gap-9 h-screen w-screen sm:h-screen sm:w-[25%] top-8 rounded-md shadow-lg py-2`}
  >
    <div className='w-[100%] flex flex-col items-center '>
    <span className="block px-4 py-2 text-lg flex justify-center font-semibold text-white rounded-lg hover:bg-white w-[30%] font-Poppins hover:text-orange-600 ">
      Home
    </span>
    <span className="block px-4 py-2 text-lg flex justify-center font-semibold  text-white rounded-lg hover:bg-white w-[30%] hover:text-orange-600">
      Comics
    </span>
    <span className="block px-4 py-2 text-lg flex justify-center font-semibold text-white rounded-lg hover:bg-white w-[30%]  hover:text-orange-600">
      My Comics
    </span>
    <span className="block px-4 py-2 text-lg flex justify-center font-semibold text-white rounded-lg hover:bg-white w-[30%] hover:text-orange-600">
      Favourites
    </span>
    <span className="block px-4 py-2 text-lg flex justify-center font-semibold text-white rounded-lg hover:bg-white w-[30%]  hover:text-orange-600">
      Log out
    </span>
    </div>
    
  </div>
</div>
    
            <img src={Logo} className=' hidden p-6 sm:block' alt=""    />
            <img src={logo2}  className='w-10 h-10   sm:hidden' alt=''/>
            
      </nav>
          
   

          
    </header>
    </>
  )
}
