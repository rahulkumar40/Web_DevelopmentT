import React from 'react'

function Filter({filterData,category,setCategory}) {

  const filterHandler = (title)=>{
    setCategory(title);
  }
  return (
    <div className='flex w-11/12 flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
      {
            filterData.map((data)=>{
                  return <button key={data.id} className={`m-2 text-lg text-white rounded-md bg-blue-700 px-2 py-1 hover:bg-opacity-50 border-2 border-transparent transition-all duration-300   
                    ${category===data.title ? ("bg-opacity-60 border-white"):("bg-opacity-50 border-transparent")}  
                    `  } onClick={()=> filterHandler(data.title)}>{data.title}</button>
            })
      }
    </div>
  )
}

export default Filter