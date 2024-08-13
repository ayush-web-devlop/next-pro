import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Pagination from '../pagination/Pagination'

function Menu() {
  return (
    <div className='flex-[2] my-[50px] mt-[60px]  '>
      <h2 className='text-gray-400 text-[16px] font-[400] '>What's Hot</h2>
      <h1 className='text-[28px] '>Most Popular</h1>
      <div className='flex flex-col gap-16 mt-5'>
        <Link href="/" className='flex items-center gap-[20px] ' >
         <div className='flex-1 relative aspect-square'>
          <Image src="/p1.jpeg" alt='' fill className='rounded-[50%] ' />
         </div>
         <div className='flex-[4] '>
          <span className='px-[13px] py-[3px] rounded-[13px] text-white bg-orange-500 '>Travel</span>
          <h3 className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
          <div className='flex gap-2 text-[12px] '>
            <span>Jhon Doe</span>
            <span className='text-gray-400'>- 10.8.24</span>
          </div>
         </div>
        </Link>
        <Link href="/" className='flex items-center gap-[20px] ' >
         <div className='flex-1 relative aspect-square'>
          <Image src="/p1.jpeg" alt='' fill className='rounded-[50%] ' />
         </div>
         <div className='flex-[4] '>
          <span className='px-[13px] py-[3px] rounded-[13px] text-white bg-green-500 '>Culture</span>
          <h3 className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
          <div className='flex gap-2 text-[12px] '>
            <span>Jhon Doe</span>
            <span className='text-gray-400'>- 10.8.24</span>
          </div>
         </div>
        </Link>
        <Link href="/" className='flex items-center gap-[20px] ' >
         <div className='flex-1 relative aspect-square'>
          <Image src="/p1.jpeg" alt='' fill className='rounded-[50%] ' />
         </div>
         <div className='flex-[4] '>
          <span className='px-[13px] py-[3px] rounded-[13px] text-white bg-violet-500 '>Food</span>
          <h3 className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
          <div className='flex gap-2 text-[12px] '>
            <span>Jhon Doe</span>
            <span className='text-gray-400'>- 10.8.24</span>
          </div>
         </div>
        </Link>
        <Link href="/" className='flex items-center gap-[20px] ' >
         <div className='flex-1 relative aspect-square'>
          <Image src="/p1.jpeg" alt='' fill className='rounded-[50%] ' />
         </div>
         <div className='flex-[4] '>
          <span className='px-[13px] py-[3px] rounded-[13px] text-white bg-blue-400 '>Fashion</span>
          <h3 className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
          <div className='flex gap-2 text-[12px] '>
            <span>Jhon Doe</span>
            <span className='text-gray-400'>- 10.8.24</span>
          </div>
         </div>
        </Link>
        <Link href="/" className='flex items-center gap-[20px] ' >
         <div className='flex-1 relative aspect-square'>
          <Image src="/p1.jpeg" alt='' fill className='rounded-[50%] ' />
         </div>
         <div className='flex-[4] '>
          <span className='px-[13px] py-[3px] rounded-[13px] text-white bg-orange-500 '>Style</span>
          <h3 className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
          <div className='flex gap-2 text-[12px] '>
            <span>Jhon Doe</span>
            <span className='text-gray-400'>- 10.8.24</span>
          </div>
         </div>
        </Link>
        <Link href="/" className='flex items-center gap-[20px] ' >
         <div className='flex-1 relative aspect-square'>
          <Image src="/p1.jpeg" alt='' fill className='rounded-[50%] ' />
         </div>
         <div className='flex-[4] '>
          <span className='px-[13px] py-[3px] rounded-[13px] text-white bg-purple-500 '>Coding</span>
          <h3 className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
          <div className='flex gap-2 text-[12px] '>
            <span>Jhon Doe</span>
            <span className='text-gray-400'>- 10.8.24</span>
          </div>
         </div>
        </Link>
        <div className='md:hidden'>
        <Pagination />
        </div>
      </div>
    </div>
  )
}

export default Menu
