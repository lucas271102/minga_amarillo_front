
import Facebook from '../assets/Facebook.png'
import Twitter from'../assets/Twitter.png'
import Vimeo from'../assets/Vimeo.png'
import Youtube from'../assets/Youtube.png'
import footerbg from '../assets/footerbg.png'

export default function Footer () {
  return (
    <div>
         <footer className='bg-white-700 flex flex-col'>
  <div >
    <div className='w-full'>
      <img src={footerbg} alt="" className='rounded-[60%_60%_100%100%/_0%_0%_100%_100%] h-44 min-[640px]:w-screen h-56'/>
    </div>
    <div className='w-screen md:w-2/3 flex  container mx-auto flex flex-col  items-center min-[640px]:flex-row p-9 justify-center sm:space-x-12'>
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
  )
}
 