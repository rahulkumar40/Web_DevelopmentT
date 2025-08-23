import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from "./Spinner.jsx"
function Blogs() {
      // step 3
      const {loading ,posts} = useContext(AppContext);
  return (
    <div>
      {
            loading ? (<Spinner/>) : (
                  posts.length === 0 ? (<div><p>No post found</p> </div>):
                  (posts.map( (post ) => (
                        <div className='mt-[5rem] mx-w-[1190px] w-11/12 mx-auto mb-[6rem] ' key={post.id}> 

                              <p className='bg-blue-500 font-bold text-xl'>{post.title}</p>
                              <p> By {post.author} on <span>{post.category}</span> </p>

                              <p>Post on {post.date}</p>
                              <p>{post.content}</p>
                              <div className='flex justify-center items-center gap-x-5'>
                                    {
                                          post.tags.map(( tag , id )=>(<p key={id} className='text-blue-500 text-sm'># {tag}</p>))
                                    }
                              </div>

                        </div>
                  )))
            )
      }

    </div>
  )
}

export default Blogs