import { useState } from 'react'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import Logo from './assets/Logo.png'
import Menu from './assets/Menu.png'
import Facebook from'./assets/Facebook.png'
import Twitter from'./assets/Twitter.png'
import Vimeo from'./assets/Vimeo.png'
import Youtube from'./assets/Youtube.png'
import footerbg from './assets/footerbg.png'

import './index.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className="bg-background w-full object-cover   h-80vh w-full  " >
      <nav className=' flex gap-12 p-6 min-[640px]:space-x-96 gap-x-96 flex-grow'>
      <button><img  src={Menu} alt="" /></button>
            <img src={Logo} alt="" srcset=""   />
            
      </nav>
          
           <div className='p-9 justify-center'>
           <h1 className='text-5xl text-white font-bold  '>For the love of manga</h1>
           <h2 className='text-white flex ;  '>Explore our varieties</h2>
            <h3 className='text-white text-xs'>#MingaLove❤</h3>
            <button className='text-orange-500 font-semibold bg-white md:visibleflex justify-center p-3 w-56 invisible min-[640px]:visible ' >Sign in!</button>
            <button className='text-orange-500 font-semibold bg-white flex justify-center p-3 w-56 min-[640px]:invisible' >Lets go!</button>
           </div>
          
    </header>
    
     <div className=' hidden min-[640px]:block bg-white-700 p-20 flex justify-center '>
      <div className='bg-gradient-to-r from-orange-500 to-orange-600  min-[640px]:flex justify-center; h-64 p-6 text-white space-x-36 w-80vh rounded-lg'>
        <img src={img1} alt="" srcset="" className='mb-28 h-60 '/>
          <img   src={img2} alt="" srcset="" className=' left-96 bottom-96 ' />
          <div className='w-1/3 p-9 text-left left-96'>
            
            <h1 className='text-xl font-medium '>Shonen</h1>
             <p className='flex justify-center  leading-4'>Is the manga that is aimed at adolescent boys.
              They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
          </div>
          
      </div>
     </div>
     <div>
     <footer className='bg-white-700 flex flex-col'>
  <div >
    <div className='w-full'>
      <img src={footerbg} alt="" className='rounded-[60%_60%_100%100%/_0%_0%_100%_100%] h-44 min-[640px]:w-screen h-56'/>
    </div>
    <div className='w-screen md:w-2/3 flex flex-col container mx-auto flex flex-col justify-end items-center min-[640px]:flex-row p-9 justify-center space-x-12'>
      <h2 className='text-black text-center md:text-left mb-4 md:mb-0 mx-4 md:mx-0'>Home</h2>
      <h2 className='text-black text-center md:text-left mb-4 md:mb-0 mx-4 md:mx-0'>Mangas</h2>
      <h2 className='text-orange-600 text-center md:text-left text-2xl font-semibold mb-4 md:mb-0 mx-4 md:mx-0'>Minga雪</h2>
    <div >
      <div className='flex gap-x-12 bottom-3'>
      <img src={Facebook} alt="" />
      <img src={Twitter} alt="" />
      <img src={Vimeo} alt="" />
      <img src={Youtube} alt="" />
      </div>
      <button className='bg-orange-600 text-white px-4 py-2 rounded-md mx-4 md:mx-0 w-60'>Donate</button>
    </div>
    </div>
  </div>
</footer>

     </div>
    </>
  )
}

export default App
