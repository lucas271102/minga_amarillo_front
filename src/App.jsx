import { useState } from 'react'

import apiUrl from '../api'
import Index from './pages/Index.jsx'
import Main from './layout/Main.jsx'

import './index.css'


function App() {
  const [count, setCount] = useState(0)
console.log(apiUrl)
console.log(process.env.NODE_ENV)
  return (
    <>

<Main>
  <Index/>
</Main>

  
  
</>


  );}export default App 
