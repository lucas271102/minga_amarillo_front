import { useState } from 'react'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import apiUrl from '../api'
import Logo from './assets/Logo.png'
import Menu from './assets/Menu.png'
import Carousel from './components/Carousel.jsx'

import circlearrow from './assets/circlearrow.png'
import circle from './assets/circle.png'
import Footer from './components/Footer.jsx'

import './index.css'


function App() {
  const [count, setCount] = useState(0)
console.log(apiUrl)
console.log(process.env.NODE_ENV)
  return (
    <>

    <header className="bg-background bg-no-repeat bg-cover w-full object-cover h-[60vh]    w-full  " >
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
    
   <Carousel/>
     <div>
    <Footer/>
</div>

  
  
</>


  );}export default App 
