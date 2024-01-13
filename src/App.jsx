import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from './components/Layout';
import Blogs from './components/Blogs';

function App() {

  return (
    <>
      <Layout>
        <h1 className='text-center mt-4'>Blog App</h1>
        
        <Blogs />
      </Layout>
    </>
  )
}

export default App
