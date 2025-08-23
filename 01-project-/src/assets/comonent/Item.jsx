import React from 'react'

export default function Item(props) {
      let item = props.name;
  return (
    <div className='bg-blue-700 rounded-md h-[2rem] flex justify-center align-middle text-xl text-yellow-400'>
      <p>{item}</p>
    </div>
  )
}
