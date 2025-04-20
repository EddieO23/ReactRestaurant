import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar';
import pizza2 from '../Images/Pizza2.png';

function Home({ bodyClass }) {
  useEffect(() => {
    document.body.className = bodyClass;
  }, [bodyClass]);

  return (
    <div className="h-screen flex">
      {/* Left side: Navbar or other content */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        {/* You can add more content here if needed */}
      </div>

      {/* Right side: Pizza image */}
      <div className="w-1/2 h-full">
        <img
          src={pizza2}
          alt="Pizza"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Home;
