import React from 'react'
import { useState } from 'react';
export default function ProductItem(props) {
      const [title, setTitle] = useState(props.item);
      const foodItems = [
            "Popcorn", "Pizza","Burger","Fries","Ice Cream","Tacos","Sushi","Pasta","Salad","Donuts","Sandwich","Chocolate",
            "Hotdog"
          ];
      const clickHandler= ()=>{
            let num = Math.floor(Math.random()*foodItems.length)
            setTitle(foodItems[num])
            console.log("hii")
}
  return (
    <div className='flex justify-between w-[20rem] align-middle mt-6 text-2xl'>
      <p className='text-blue-600 font-bold'>{title}</p>
      <div className='bg-red-600 w-[10rem] h-[3rem] text-white text-2xl p-2'>
      <button onClick={clickHandler} >Add To Card</button>

      
      {/* there it diff between 1. onClick ={click} vs 2. onClick ={click()} 
      1. it active at click time 
      2. it active any tiem when code run 
        */}
    </div>
    </div>
  )
}
