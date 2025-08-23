import React from 'react'

export default function DateCard(props) {
  return (
    <div className='bg-red-500 rounded-md h-[2rem] flex justify-center align-middle text-xl text-white my-2'>
      <span className='mx-3'>{props.day}</span>
      <span className='mx-3'>{props.month}</span>
      <span className='mx-3'>{props.year}</span>
    </div>
  )
}
