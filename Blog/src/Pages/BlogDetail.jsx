import React from 'react'
import {  useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './BlogDetail.css';

function BlogDetail() {
    const { id } = useParams();
    const [post, setPost] = useState([]);

    useEffect(() => {
      axios.get(`https://dummyjson.com/posts/${id}`)
       .then(res => setPost(res.data))
       .catch(err => console.log(err))
    }, [id])
    

  return (
    <div className='blog-detail'>
       <div className="blog-detail-title">
         <h1>{post.title}</h1>
        </div>
       <div className="blog-detail-item">
         <p>Tags:{post.tags?.map(tag => `#${tag} `)} </p>
         <p>{post.body}</p>
       </div>
       <div className="back-btn">
        <Link to="/">Back to Home</Link>
       </div>
    </div>
  )
}

export default BlogDetail
