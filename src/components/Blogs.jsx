import React, { useState } from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { Modal, Button, Form } from 'react-bootstrap';

import Blog from './Blog'

const blogData = [
    {
        id: 1,
        title: 'Blog title 01',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sapiente veritatis beatae ea nemo animi reiciendis autem tempora quos. Sunt!',

    },
    {
        id: 2,
        title: 'Blog title 02',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sapiente veritatis beatae ea nemo animi reiciendis autem tempora quos. Sunt!',

    }
]

export default function Blogs() {
    const [blogs, setBlogs] = useState(blogData);
    const [show, setShow] = useState(true);
    const [formData, setFormData] = useState({title: '', description: ''});
    const [error, setError] = useState({});

    // console.log(formData)

    const handleShow = () => {
      setShow(true)
    }

    const handleHide = () => {
      setShow(false)
    }

    const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData((prevFormData) => 
        ({...prevFormData, [name]: value})
      )
    }
    console.log(formData);

    const handleSubmit = (e) => {
      e.preventDefault();
      const intputError = {};
      if(formData.title.trim() === '' || formData.title.trim() === null){
        intputError.title = 'The title field is require'
      }

      if(formData.description.trim() === '' || formData.description.trim() === null){
        intputError.description = 'The title field is require'
      }
      setError(intputError);
    }

  return (
    <>
    <div className='d-flex justify-content-between gap-2 mb-4'>
      <h4>All Blog</h4>
      <button type='button' 
        className='btn btn-dark d-flex align-items-center gap-1'
        onClick={handleShow}>
        <CiCirclePlus />
        Create Blog</button>
    </div>
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>SL No.</th>
          <th>Title</th>
          <th>Description</th>
          <th>Image</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01</td>
          <td>this is first title</td>
          <td>Lorem ipsum dolor sit amet.</td>
          <td></td>
          <td>active</td>
          <td></td>
        </tr>
      </tbody>
    </table>

    {/* Modal */}
    <Modal show={show} onHide={handleHide}>
      <Modal.Header closeButton>
        <Modal.Title>Create New Blog</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* title */}
          <Form.Group controlId="title" className='mb-3'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              placeholder='Enter title here...' 
              name='title'
              value={formData.title} 
              onChange={handleChange} />
            {error && error.title ? <span className='text-danger text-sm'>{error.title}</span> : ''}
          </Form.Group>

          <Form.Group controlId='description' className='mb-3'>
            <Form.Label>Description</Form.Label>
            <Form.Control 
              as='textarea'
              rows={4}
              placeholder='Enter description here...'
              name="description"
              value={formData.description}
              onChange={handleChange}/>
            {error && error.description ? <span className='text-danger text-sm'>{error.description}</span> : ''}
            
          </Form.Group>

          {/* <Form.Group controlId='image' className='mb-3'>
            <Form.Label>Image</Form.Label>
            <Form.Control 
              type='file'
              name="image"
              onChange={handleChange} />
          </Form.Group> */}

          <Button type="submit" variant='success' className='float-end'>Create</Button>
        </Form>
      </Modal.Body>

    </Modal>

    {/* <div className='blogs row'>
      {blogs.map((blog) =>
        <div className="col-md-4">
            <Blog key={blog.id} blog={blog}/> 
        </div>  
        )}
    </div> */}
    </>
  )
}
