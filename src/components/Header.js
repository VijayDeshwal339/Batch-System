import React, { useState } from 'react';
import logo from '../assests/frame.svg';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='relative'>
      <div className='flex items-center justify-between py-5 w-[80%] mx-auto'>
        <div className='flex items-center justify-center gap-6 cursor-pointer'>
          <div className='flex items-center justify-center gap-2 cursor-pointer'>
            <img src={logo} alt='logo' />
            <p className='font-bold text-2xl '>uifry</p>
          </div>
          <div className='hidden md:flex gap-6'>
            <p className='font-semi-bold text-base cursor-pointer'>Home</p>
            <p>About us</p>
            <p>Pricing</p>
            <p>Features</p>
          </div>
        </div>
        <button className='text-white bg-black px-5 py-2 hidden md:block'>Download</button>
        <button className='md:hidden text-black px-5 py-2' onClick={toggleSidebar}>
          ☰
        </button>
      </div>

      {isSidebarOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 z-50' onClick={toggleSidebar}>
          <div
            className='fixed top-0 left-0 w-3/4 h-full bg-white p-5'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex items-center justify-between mb-5'>
              <div className='flex items-center gap-2'>
                <img src={logo} alt='logo' />
                <p>uifry</p>
              </div>
              <button className='text-black' onClick={toggleSidebar}>
                ✕
              </button>
            </div>
            <div className='flex flex-col gap-4'>
              <p onClick={toggleSidebar}>Home</p>
              <p onClick={toggleSidebar}>About us</p>
              <p onClick={toggleSidebar}>Pricing</p>
              <p onClick={toggleSidebar}>Features</p>
              <button className='text-white bg-black px-5 py-2 mt-4' onClick={toggleSidebar}>Download</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
