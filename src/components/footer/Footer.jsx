import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='flex md:mt-[50px] mt-[20px] justify-between md:gap-28 gap-11 flex-col md:flex-row'>
      <div className='flex-1 flex flex-col gap-[14px] '>
        <div className='flex items-center gap-3'>
          <Image src="/logom.png" alt='BlogApp' width={50} height={50} className='rounded-full'/>
          <h1 className='text-[24px] font-semibold'>About Us</h1>
        </div>
        <p className='text-gray-400'>Welcome to our website, your ultimate destination for all things martial arts! From in-depth technique guides and training tips to the latest news and history of various styles, we’re dedicated to providing high-quality content to inspire and educate martial artists of all levels. Whether you’re a seasoned practitioner or just starting out, our blog aims to support your journey with valuable insights and resources.</p>
        <div className='flex gap-3 mt-1'>
          <Image src="/facebook.png" alt='image' width={18} height={18} />
          <Image src="/instagram.png" alt='image' width={18} height={18} />
          <Image src="/youtube.png" alt='image' width={18} height={18} />
        </div>
      </div>
      <div className='flex-1 flex md:gap-24 gap-[30px] justify-end mb-2'>
        <div className='flex flex-col gap-3'>
          <span className='font-medium text-xl'>Link</span>
          <Link href="/" className='text-gray-400'>Homepage</Link>
          <Link href="/" className='text-gray-400'>Blog</Link>
          <Link href="/" className='text-gray-400'>About</Link>
          <Link href="/" className='text-gray-400'>Contact</Link>
        </div>
        <div className='flex flex-col gap-3'>
          <span className='font-medium text-xl'>Resources</span>
          <Link href="/" className='text-gray-400'>Training Tips</Link>
          <Link href="/" className='text-gray-400'>Technique Tutorials</Link>
          <Link href="/" className='text-gray-400'>Equipment Reviews</Link>
          <Link href="/" className='text-gray-400'>Martial Arts News</Link>
        </div>
        <div className='flex flex-col gap-3'>
          <span className='font-medium text-xl'>Social</span>
          <Link href="/" className='text-gray-400'>Facebook</Link>
          <Link href="/" className='text-gray-400'>Instagram</Link>
          <Link href="/" className='text-gray-400'>Youtube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
