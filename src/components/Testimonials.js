import React from 'react'
import img1 from '../assests/group-28@2x.png'
import img2 from '../assests/group-27@2x.png'
import img3 from '../assests/group-29@2x.png'
import img4 from '../assests/group-30@2x.png'
import img5 from '../assests/group-31@2x.png'
import Bg from '../assests/Group 1000002356.png'
import Ring from '../assests/Group 1000002333.png'


const Testimonials = () => {
  return (
    <div className='flex flex-col  gap-10 mt-36 w-[80%] mx-auto'>
      <div className='flex flex-col items-center justify-center gap-4'>
      <p className='uppercase '>testimonial</p>
      <p className='capitalize '>what our users say about us?</p>
      </div>
      <div className='md:flex items-center'>
        <div  className='md:w-[60%] relative'>
        <img src={Bg} alt="" className="self-start " />
          
          <div className="absolute -top-12 left-0">
          <img src={Ring} alt='' className='cursor-pointer' />
          </div>

         
        </div>
      
        <div className='md:w-[40%] flex flex-col items-center md:items-start gap-5'>
          <p className='capitalize font-bold text-2xl'>the best financial accounting app ever!</p>
          <p className='font-normal opacity-50 capitalize'> “Arcu at dictum sapien, mollis. Vulputate sit id<br></br> accumsan,
          ultricies. In ultrices malesuada elit<br></br> mauris etiam odio. Duis
          tristique lacus, et blandit<br></br> viverra nisl velit. Sed mattis
          rhoncus, diam<br></br> suspendisse sit nunc, gravida eu. Lectus eget eget<br></br>
          ac dolor neque lorem sapien, suspendisse aliquam.”</p>
          <div className='flex items-center gap-2'>
            <img src={img1} alt='' className='w-[70px] h-[70px]'/>
            <img src={img2} alt=''  className='opacity-50 w-[50px] h-[50px]' />
            <img src={img3} alt=''  className='opacity-50 w-[50px] h-[50px]' />
            <img src={img4} alt=''  className='opacity-50 w-[50px] h-[50px]'/>
            <img src={img5} alt=''  className='opacity-50 w-[50px] h-[50px]'/>
          </div>
          <p className='font-bold'>Nick Jonas</p>
        </div>
      </div>

    </div>
  )
}

export default Testimonials

