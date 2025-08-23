import React from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function BlogPage() {
  const [blog, setBlog] = useState()
  const [relatedBlog, setRelatedBlog] = useState()
  const location = useLocation()
  const navigate = useNavigate()
  
  return (
    <div>

      
    </div>
  )
}

export default BlogPage