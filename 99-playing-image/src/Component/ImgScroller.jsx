import React from 'react'
import Card from './Card'
import { useState } from 'react'
function ImgScroller({imageData}) {
      const [images, setImage] = useState(imageData);
      console.log(images.length)
  return (

      <div>
    <div className='bg-blue-600 flex justify-center items-center h-[180px] max-w-[1200px] flex-nowrap  '>
      {
            images.map((img)=>{
                  return (
                       < Card {...img} key={img.id}></Card>
                  )
            })
      }
    </div>
    </div>
  )
}

export default ImgScroller