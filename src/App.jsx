import { useState } from 'react'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import NAV from './assets/NAV.png'
import './index.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className="bg-background">
      <nav className='p-8 flex'>
            <img src={NAV} alt="" srcset="" />
      </nav>
           <h1 className='text-5xl text-white font-bold flex justify-content:center; p-9'>For the love of manga</h1>
    </header>
    
     <div className='bg-stone-700'>
      <div className='bg-orange-500 flex justify-center; p-10 text-white'>
        <img src={img1} alt="" srcset="" />
          <img src={img2} alt="" srcset="" />
          <div>
            <h1 className='text-xl font-medium flex justify-center'>Shonen</h1>
            <p className='flex justify-center'>Is the manga that is aimed at adolescent boys.
              They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
          </div>
          
      </div>
     </div>
    </>
  )
}

export default App
