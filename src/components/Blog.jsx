import React from 'react'
import { Link } from 'react-router-dom'
function Blog() {
  return (
   <section className='about'>
    <Link to={'/'} className='arrow-left'>⇐ </Link>
    <h1>LATEST BLOG</h1>
    <hr />
    <div className='blog'> 
        <p>No Posts Yet!!</p>
    </div>
   </section>
  )
}

export default Blog
