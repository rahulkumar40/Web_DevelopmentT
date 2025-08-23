import React from 'react'
import ICard from './ICard'
function ImgCard({imgData}) {
  return (
    <div>
      {
            imgData.map( (img)=>{
                  return(
                        <ICard key={img.id} {...img}></ICard>

                  ) 
                  //  <img src={img.path} alt='image here' key={img.id}></img>
            })
      }
    </div>
  )
}

export default ImgCard
