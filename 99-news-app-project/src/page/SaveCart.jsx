import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import SaveCard from '../Component/SaveCard';

function SaveCart() {
    const news = useSelector((state)=> state.news)
    console.log(news);
  return (
    <div className='h-full w-full mx-auto'>
        <div className='h-screen overscroll-y-auto max-w-[1140px] w-11/12 mx-auto'>
        {
            news.length>0 ? (<div className='h-full bg-orange-200 px-2'>
                {
                    news.map( (data, index)=>{
                        return(
                            <SaveCard id={index} data={data}/>)
                    })
                }
            </div>):
            (<div className='h-[20vh] w-full flex justify-center items-center'>
                <div className='flex justify-center items-center flex-col'>
                    <p className='text-2xl font-bold'>No News Added</p>
                    <button className='text-xl font-semibold bg-blue-400 px-3 py-1 rounded-md hover:bg-opacity-75  transition-all duration-[0.2s] delay-[0.2s]'> 
                        <NavLink to='/'>Add News</NavLink>
                    </button>
                </div>
            </div>)
        }
        </div>

        {/* int arr[]= {1, 1, 2, 3, 4, 5, 6, 7,3 ,2, 3,4 };
        ans arr[] {0, 2, 2, 3, 2, }
        create new ans  =0;
        for(int i=0; i<n; i++){
            for(int j=i; j<n; )
        } */}
    </div>
  )
}

export default SaveCart