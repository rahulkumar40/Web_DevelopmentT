import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let i = count;
  let incHandler = ()=>{
    // setCount(i++);
    setCount(count+1)
  }
  let resetHandler = ()=>{
    setCount(0);
  }
  let decHandler = ()=>{
    setCount(i--);
  }
  return (
    <>
    <div className='bg-blue-300 w-[100vw] h-[100vh] pt-[10rem] flex justify-center flex-col items-center'>
      <div className='text-black-100 font-bold text-2xl rounded-md  py-3 '>Increment & Decrement</div>
      <div className='bg-white flex justify-between w-[16rem] gap-2'>
        <button className='text-[2rem] border-r-2 text-center w-20 border-black' onClick={incHandler}>+</button>
        <p className='bg-white text-[2rem] border-r-2 text-center w-20 border-black'>{count}</p>
        <button className='text-[2rem] text-center w-20 border-black' onClick={decHandler}>-</button>
      </div>
      <button className='mt-5 text-white px-9 py-2 font-medium text-2xl bg-blue-500 rounded-md' onClick={resetHandler}>Reset</button>
    </div>
    </>
  )
}

export default App
