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

    const handleShow = () => {
      setShow(true)
    }

    const handleHide = () => {
      setShow(false)
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
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group controlId="title" className='mb-3'>
            <Form.Label>Title</Form.Label>
            <Form.Control placeholder='Enter title here...'/>
          </Form.Group>

          <Form.Group controlId='description' className='mb-3'>
            <Form.Label>Description</Form.Label>
            <Form.Control 
              as='textarea'
              rows={4}
              placeholder='Enter title here...'/>
          </Form.Group>

          <Form.Group controlId='image' className='mb-3'>
            <Form.Label>Image</Form.Label>
            <Form.Control 
              type='file' />
          </Form.Group>

        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={handleHide}>Close</Button>
        <Button variant='success'>Save</Button>

      </Modal.Footer>
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
