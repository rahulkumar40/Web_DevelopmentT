import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import ColorCard from './Componant/ColorCard'
function App() {
  const [color, setColor] = useState("olive")


  return (
    <>
    <div className="w-full h-screen duration-200 "
      style={{backgroundColor : color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>Text
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-1 rounded-3xl">
          
        </div>
      </div>
    </div>
      {/* <div className="container">
      <ColorCard className="bg-blue-400"/>
      <ColorCard/>
      <ColorCard/>
      <ColorCard/>
      <ColorCard/>
      <ColorCard/>
      </div> */}
    </>
  )
}

export default App
