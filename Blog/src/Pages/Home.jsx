
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BlogCard from '../Components/BlogCard/BlogCard'
import './Home.css'
//'https://dummyjson.com/posts/'



function Home() {
    const [post, setpost] =useState([])

     useEffect(() => {
    axios.get('https://dummyjson.com/posts')
    .then((res) => setpost(res.data.posts))
    .catch((err) => console.log(err))
    
  }, [])
  return (
    <div className='blog-home'>
      {post.map(post =>
       <BlogCard key={post.id} post={post} />
      )}
    </div>
  )
}

export default Home
