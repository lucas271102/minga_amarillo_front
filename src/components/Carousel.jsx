import React from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import circlearrow from '../assets/circlearrow.png'
import circle from '../assets/circle.png'
export default function Carousel() {
  return (

    <div className=' hidden min-[640px]:block bg-white-700 p-20 flex justify-center '>
    <div className='bg-gradient-to-r from-orange-500 to-orange-600  min-[640px]:flex justify-center; h-64 p-6 text-white space-x-36 w-80vh rounded-lg'>
      <div className='flex justify-center items-center'>
      <img src={circlearrow} className='w-6 h-6 flex items-center justify-center' alt="" srcset="" />
      </div>
     
      <img src={img1} alt="" srcset="" className='mt-[-3rem] h-60 '/>
        <img   src={img2} alt="" srcset="" className='mt-[-3rem] h-60 ' />
        <div className='w-1/3 p-9 text-left left-96'>
          
          <h1 className='text-xl font-medium '>Shonen</h1>
           <p className='flex justify-center  leading-4'>Is the manga that is aimed at adolescent boys.
            They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
        </div>
        <div className='flex items-center justify-center'>
        <img src={circle} className='w-6 h-6 flex items-center justify-center' alt="" srcset="" />
        </div>
      
    </div>
   </div>
  )
}
