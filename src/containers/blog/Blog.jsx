import React from 'react'
import {blog01,blog02,blog03,blog04,blog05} from './import.js'
import Article from '../../components/article/Article'
import './blog.css'

const Blog = () => {
  return (
    <div className='wmx__blog section__padding'>
      <div className='wmx__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='wmx__blog-container'>
        <div className='wmx__blog-container_groupA'>
          <Article imageUrl={blog01} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
        <div className='wmx__blog-container_groupB'>
        <Article imageUrl={blog02} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imageUrl={blog03} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imageUrl={blog04} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imageUrl={blog05} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
      </div>
    </div>
  )
}

export default Blog