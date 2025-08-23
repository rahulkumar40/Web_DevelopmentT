import React from 'react'

export default function DateCard(props) {
  const day = props.day;
  const month = props.month;
  const year = props.year;
  return (
    <div className='bg-blue-500 flex justify-center gap-4 text-2xl'>
      <p>{day}</p>
      <p>{month}</p>
      <p>{year}</p>
    </div>
  )
}
