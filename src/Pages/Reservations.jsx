import React from 'react'
import {Link } from 'react-router-dom'


function Reservations() {
  return (
    <div className='font-bold text-3xl '>
     <p className='text-blue-400'>Welcome to Reservations page!</p>
     <Link to={'/'}>Back to Home</Link>
    </div>
  )
}

export default Reservations
