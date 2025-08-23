import React from 'react'

export default function Item(props) {
      const name = props.name;
  return (
    <div className='flex justify-center align-middle  h-[3rem mt-3'>
      <p className="text-red-700 bg-green-600 text-2xl">{name}</p>
      {props.children}
    </div>
  )
}
