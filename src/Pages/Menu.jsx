import React from 'react'
import {Link } from 'react-router-dom'


function Menu() {
  return (
    <div className='font-bold text-3xl '>
     <p className='text-blue-400'>Welcome to Menu page!</p>
     <Link to={'/'}>Back to Home</Link>
    </div>
  )
}

export default Menu
