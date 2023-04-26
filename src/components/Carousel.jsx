import React from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import circlearrow from '../assets/circlearrow.png'
import circle from '../assets/circle.png'
import { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../api.js'

export default function Carousel() {
  useEffect(
    ()=>{
      axios(apiUrl +'categories').then(res=> setCategories(res.data.categories)).catch(err=>console.log(err))
    },
    []
  )
  let [categories, setCategories]= useState( [])
 
  let [slider, setSlider]= useState(0)
  let contador = 1
  let sumar =()=>{
   setSlider(slider + 1)
   if (slider===3){
    setSlider(0)
   }

  } 
  let restar = ()=>{
   setSlider(slider -1)
   if (slider === 0){
    setSlider(3)
   }
   
  }
  
return (

<>

<div className=' hidden min-[640px]:block   bg-slate-200 p-20 flex justify-center '>
    <div className='bg-gradient-to-r from-orange-500 to-orange-600  min-[640px]:flex justify-center; h-64 p-6 text-white space-x-4 lg:space-x-36  w-80vh rounded-lg'>
      <div className='flex justify-center items-center'>
      <img src={circlearrow} onClick={restar} className='w-6 h-6 flex items-center justify-center' alt="" srcset="" />
      </div>
     
      <img src={categories[slider]?.character_photo} alt="" srcset="" className='mt-[-3rem] h-60 '/>
        <img   src={categories[slider]?.cover_photo} alt="" srcset="" className='mt-[-3rem] h-60 ' />
        <div className='w-1/3  text-left left-96'>
          
          <h1 className='text-xl font-medium '>{categories[slider]?.name[0].toUpperCase()}{categories[slider]?.name.substring(1)}</h1>
           <p className='sm:flex justify-center  leading-4'>{categories[slider]?.description}</p>
        </div>
        <div className='flex items-center justify-center'>
        <img src={circle} onClick={sumar}  className='w-6 h-6 flex items-center justify-center' alt="" srcset="" />
        </div>
      
    </div>
   </div>
   
</>
   
  )
}
