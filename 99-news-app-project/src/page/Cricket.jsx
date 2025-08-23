import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
// import Card from '../Component/Card';
import Cards from '../Component/Cards';
import cricket from '../assets/newsLevelImg/cricketews.png'
function Cricket() {
    const {title, setTitle,newData,setNewData,loading} = useContext(AppContext);
  return (
    <div className='h-full w-full'>
        <div className="w-full h-full mt-2">
                <img
                  src={cricket}
                  alt="level-image"
                  loading="lazy"
                  className="h-[30rem] w-full items-center "
                />
              </div>
        <div className='max-w-[1140px] h-full mx-auto'>
        {loading ? (<div className='flex justify-center items-center h-[90vh] text center text-2xl'>Data Loading</div>) : <Cards newData={newData}></Cards>}
        </div>
    </div>
  )
}

export default Cricket