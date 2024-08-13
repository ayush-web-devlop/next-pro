import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = () => {
  return (
    <div className='mb-[50px] flex items-center gap-[50px] '>
      <div className='flex-1 h-[350px] relative'>   
       <Image src="/p1.jpeg" alt='p1 image' fill />
      </div>
      <div className='flex-1 flex flex-col gap-[30px] '>
       <div>
        <span className='text-gray-400 mx-2 '>11.02.2023</span>
        <span className='text-yellow-300 font-medium '>Culture</span>
       </div>
       <Link href="/" >
       <h1 className='font-bold text-2xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
       </Link>
       <p className='text-[18px] font-[300]  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem, laborum molestias nemo voluptatibus architecto amet illo exercitationem vero fugiat optio, libero culpa cum repudiandae est? Aperiam natus delectus tempore?</p>
       <Link href="/" >Read More</Link>
      </div>
    </div>
  )
}

export default Card
