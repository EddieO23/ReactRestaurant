import React from 'react'
import {Link } from 'react-router-dom'


function Chefs() {
  return (
    <div className='font-bold text-3xl '>
     <p className='text-blue-400'>Welcome to Chefs page!</p>
     <Link to={'/'}>Back to Home</Link>
    </div>
  )
}

export default Chefs
