import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './Component/NavBar'
import {Routes, Route} from 'react-router-dom'
import Cart from './Page/Cart'
import Home from './Page/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='h-screen w-screen'>
    <div className='w-11/12 max-w-[1160px] mx-auto'>
      <NavBar></NavBar>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </div>
   </div>
  )
}

export default App
