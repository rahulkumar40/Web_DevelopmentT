import React from 'react'
import Card from './Card'

function ProductCre({products}) {
  return (
    <div>
      {
            products.map((pro,index)=>{
              return <Card key={index} {...pro}></Card>
            })
      }
    </div>
  )
}

export default ProductCre