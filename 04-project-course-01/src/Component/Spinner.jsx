import React from 'react'
import './Spinner.css'
function Spinner() {
  return (
    <div className='flex justify-center items-center flex-col space-y-2 '>
      ohh wow it scan data
      <div className='spinner'>
      </div>
      <p className='bg-gray-700 text-lg font-semibold '>loading....</p>
    </div>
  )
}

export default Spinner