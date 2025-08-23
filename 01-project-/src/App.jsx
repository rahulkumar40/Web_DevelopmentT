import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DateCard from './assets/comonent/DateCard'
import Item from './assets/comonent/Item'

function App() {
  const [count, setCount] = useState(0)
  let product= [
    {
      item:"SurfXcel",
      itemDate:20,
      ItemMonth:"jan",
      itemYear:2023
    },
    {
      item:"Ghadhi",
      itemDate:10,
      ItemMonth:"june",
      itemYear:2024
    },
    {
      item:"Weel",
      itemDate:24,
      ItemMonth:"march",
      itemYear:2023
    },
    {
      item:"SurfXcel",
      itemDate:20,
      ItemMonth:"jan",
      itemYear:2020
    },

  ]
  return (
    <>
      <Item name={product[0].item}></Item>
      <DateCard day={product[0].itemDate}
          month={product[0].ItemMonth} 
          year={product[0].itemYear}
      ></DateCard>
      <Item name={product[1].item}></Item>
      <DateCard day={product[1].itemDate}
          month={product[1].ItemMonth} 
          year={product[1].itemYear}
      ></DateCard>
      <Item name={product[2].item}></Item>
      <DateCard day={product[2].itemDate}
          month={product[3].ItemMonth} 
          year={product[3].itemYear}
      ></DateCard>
      
    </>
  )
}

export default App
