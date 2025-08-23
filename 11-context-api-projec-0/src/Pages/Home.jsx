import React from 'react'
import Header from '../Component/Header'
function Home() {
  return (
    <div>
      <Header></Header>
      <div>
        <Blogs></Blogs>
        <Pagination></Pagination>
      </div>
    </div>
  )
}

export default Home