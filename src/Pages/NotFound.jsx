import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
   <>
    <div className='text-7xl font-bold underline '>404 Page Not Found ☹️</div>
    <Link to={'/'}>Back to Home</Link>
   </>
  );
}

export default NotFound;
