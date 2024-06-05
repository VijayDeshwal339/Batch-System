import React from 'react'
import vector from '../assests/frame.svg'
import Email from '../assests/frame1.svg'
import Phone from '../assests/frame2.svg'

const Footer = () => {
  return (
    <div className='w-[80%] mx-auto flex flex-col gap-20 py-10 cursor-pointer'>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 '>
    <div className='col-span-1 space-y-4'>
      <div className='flex gap-2 items-center'>
      <img src={vector} alt='' />
      <p className='text-2xl font-bold'>uifry</p>
      </div>
     
     <div  className='flex gap-2 items-center'>
     <img src={Email} alt='' />
     <p className='font-medium'>Help@Frybix.com</p>
     </div>
     
     <div  className='flex gap-2 items-center'>
     <img src={Phone} alt='' />
     <p className='font-medium'>+1234 456 678 89</p>
     </div>
     
    </div>

    <div className='col-span-1 gap-2 space-y-4'>
     <p className='text-3xl font-bold'>Links</p>
     <p className='font-medium'>Home</p>
     <p className='font-medium'>About Us</p>
     <p className='font-medium'>Bookings</p>
     <p className='font-medium'>Blog</p>
    </div>

    <div className='col-span-1 gap-2 space-y-4'>
     <p className='text-3xl font-bold'>Legal</p>
     <p className='font-medium'>Terms OfU se</p>
     <p className='font-medium'>Privacy Policy</p>
     <p className='font-medium'>Cookie Policy</p>
    </div>

    <div className='col-span-1 gap-2 space-y-4'>
     <p className='text-3xl font-bold'>Product</p>
     <p className='font-medium'>Take Tour</p>
     <p className='font-medium'>Live Chat</p>
     <p className='font-medium'>Reveiws</p>
    </div>

    <div className='col-span-2 gap-2 space-y-4'>
     <p className='text-3xl font-bold'>Newsletter</p>
     <p className='font-medium'>Stay Up To DAte</p>
     <div className='flex items-center '>
        <input type='text' placeholder='Email'  className='px-4 py-2 w-[40%]'/>
        <button className='bg-black text-white px-4 py-2'>Subscribe</button>
     </div>
    </div>
    </div>


   <div className='flex flex-col gap-10'>
    <hr className='border b-2'></hr>
    <p className='font-semibold text-center'>Copy right 2022 Uifry.Com All Rights Reserved</p>
    </div>
     
    </div>
  )
}

export default Footer