import React from 'react'

function ICard({path,name}) {
  return (
    <div>

      <img src={path} alt="image" />
      <p>{name}</p>
    </div>
  )
}

export default ICard