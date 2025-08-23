import React from 'react'

export default function ProductData(props) {
      const month = props.date.toLocaleString("en-US", { month: "long" });
      const day = props.date.toLocaleString("en-US", { day: "2-digit" });
      const year = props.date.getFullYear();
  return (
    <div className='bg-black w-[12rem] h-[7rem] text-white text-2xl rounded-md p-2'>
      <p>{month}</p>
      <p>{day}</p>
      <p>{year}</p>
    </div>
  )
}
