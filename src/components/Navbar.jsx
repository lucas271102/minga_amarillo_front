import Menu from '../assets/Menu.png'
import Logo from '../assets/Logo.png'

export default function Navbar() {
  return (
    <>

<header className="bg-background bg-no-repeat bg-cover w-full object-cover h-[60vh]    w-full  " >
      <nav className=' flex gap-12 p-6 min-[640px]:space-x-96 gap-x-96 flex-grow'>
      <button><img  src={Menu} alt="" /></button>
            <img src={Logo} alt="" srcset=""   />
            
      </nav>
          
         
          
    </header>
    </>
  )
}
