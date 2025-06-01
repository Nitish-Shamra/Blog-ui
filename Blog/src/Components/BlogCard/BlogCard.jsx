import React from 'react'
import './BlogCard.css'
import { Link } from 'react-router-dom'

function BlogCard({ post }) {
  if (!post) {
    return <div className="blog-card">Loading...</div>
  }
  return (
    <div className="blog-card">
      <h2 className="blog-title">{post.title}</h2>
      <div className="blog-meta">
        <p><span className="blog-tags">{post.tags.map(tag => `#${tag} `)}</span></p>
        <div className='blog-reactions'>  
        <span >👍 {post.reactions.likes}</span>
        <span >👎 {post.reactions.dislikes}</span>
        </div>
      </div>
      <p className="blog-body">{post.body.slice(0, 100)}...</p>
      <Link to={`/blog/${post.id}`} className="read-more" onClick={() => window.scrollTo(0, 0)}>Read More →</Link>
    </div>
  )
}

export default BlogCard
