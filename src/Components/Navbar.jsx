import { Heart, Search } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav-container relative z-10 mt-10'>
      <nav className='flex items-center mx-10'>
        <ul className='flex text-center text-white mx-32'>
          <li className='heading-font mx-10 font-bold text-lg'>
            <Link to={'/Reservations'}>Reservations</Link>
          </li>
          <li className='heading-font mx-10 font-bold text-lg'>
            <Link to={'/Menu'}>Menu</Link>
          </li>
          <li className='heading-font mx-10 font-bold text-lg'>
            <Link to={'/Reviews'}>Reviews</Link>
          </li>
          <li className='heading-font mx-10 font-bold text-lg'>
            <Link to={'/Chefs'}>Chefs</Link>
          </li>
          <li className='mx-10 -mt-2'>
            <form action='/search' method='GET'>
            <input className='rounded-lg h-10 pl-4 placeholder-gray-700 bg-red-500 border-4 border-red-500' placeholder='Search...' type="text" />
            </form>
          </li>
          <li className=''>
          <Heart className='mx-8'/>
          </li>
          <li className=''>
          <Search />
          </li>
          <li className=' mx-10'>
            <button className='text-white font-semibold bg-green-800 rounded-xl h-10 w-20 hover:bg-red-500 -mt-2'>
          Login
            </button>
          </li>
          <li>
            <button className='text-white font-semibold bg-green-800 rounded-xl h-10 w-20 hover:bg-red-500 -mt-2'>
          Sign Up
            </button>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
