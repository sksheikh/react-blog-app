import React from 'react'
import blogImg from '../assets/images/blog1.jpg'

export default function Blog({blog}) {
    const {id, title, description} = blog;
  return (
    <div className='blog card'>
        <img src={blogImg} alt={title} className='card-img-top' />
        <div className="card-body">
            <h3 className='card-title'>{title}</h3>
            <p className="card-text">{description}</p>
        </div>
    </div>
  )
}
