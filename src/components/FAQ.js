import React from 'react'
import Star from '../assests/star-2.svg'

const FAQ = () => {
  return (
    <div className='w-[80%] mx-auto flex flex-col gap-5 py-5'>
        <p className='text-[#FF5555]'>FAQ</p>
        
        <div className='grid md:grid-cols-2'>
        <div className='col-span-1'>
        <h1 className='font-bold text-6xl'>Frequently Asked Questions</h1>
        
        </div>
        <div className='col-span-1 self-center md:self-end'>
            <img src={Star}  alt='' />
        </div>
        </div>

        <div className='flex flex-col gap-5'>
        <div className='grid md:grid-cols-2 gap-3'>
          <div className='bg-[#FF5555] px-10 py-10 rounded-2xl text-white space-y-4'>
            <p className='capitalize leading-7 font-semibold text-3xl'>The Best Financial Accounting App Ever!</p>
            <p className='capitalize font-normal leading-7 '>"Arcus At dictum Saplen, Molls. Vulputate Sit Id Accumsan, Ulticies, in Ulticies Malesuada Elit Mauris."</p>
          </div>
          <div className='px-10 py-10 space-y-4'>
            <p className='capitalize leading-7 font-semibold text-3xl'>The Best Financial Accounting App Ever!</p>
            <p className='capitalize font-normal leading-7 opacity-50'>"Arcus At dictum Saplen, Molls. Vulputate Sit Id Accumsan, Ulticies, in Ulticies Malesuada Elit Mauris."</p>
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-3'>
          <div className=' px-10 py-10 space-y-4'>
            <p className='capitalize leading-7 font-semibold text-3xl'>The Best Financial Accounting App Ever!</p>
            <p className='capitalize font-normal leading-7 opacity-50'>"Arcus At dictum Saplen, Molls. Vulputate Sit Id Accumsan, Ulticies, in Ulticies Malesuada Elit Mauris."</p>
          </div>
          <div className='bg-[#FF5555] px-10 py-10 rounded-2xl text-white space-y-4'>
            <p className='capitalize leading-7 font-semibold text-3xl'>The Best Financial Accounting App Ever!</p>
            <p className='capitalize font-normal leading-7'>"Arcus At dictum Saplen, Molls. Vulputate Sit Id Accumsan, Ulticies, in Ulticies Malesuada Elit Mauris."</p>
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-3'>
          <div className='bg-[#FF5555] px-10 py-10 rounded-2xl text-white space-y-4'>
            <p className='capitalize leading-7 font-semibold text-3xl'>The Best Financial Accounting App Ever!</p>
            <p className='capitalize font-normal leading-7 '>"Arcus At dictum Saplen, Molls. Vulputate Sit Id Accumsan, Ulticies, in Ulticies Malesuada Elit Mauris."</p>
          </div>
          <div className='px-10 py-10 space-y-4'>
            <p className='capitalize leading-7 font-semibold text-3xl'>The Best Financial Accounting App Ever!</p>
            <p  className='capitalize font-normal leading-7 opacity-50'>"Arcus At dictum Saplen, Molls. Vulputate Sit Id Accumsan, Ulticies, in Ulticies Malesuada Elit Mauris."</p>
          </div>
        </div>
        </div>

    </div>
  )
}

export default FAQ