import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AuthLinks from '../authLinks/AuthLinks'

function Navbar() {
  return (
    <div className='flex justify-between items-center'>
      <div className='md:flex gap-2 hidden'>   
        <Image src="/facebook.png" width={24} height={24} />
        <Image src="/instagram.png" width={24} height={24} />
        <Image src="/youtube.png" width={24} height={24} />
      </div>
      <div className='font-bold text-3xl'>"Warrior’s Path"</div>
      <div className='md:flex md:flex-row gap-3 flex-col'>
        <div className='hidden md:flex'>
          <div className='flex gap-3 flex-col md:flex-row cursor-pointer'>
          <Link href="/">Homepage</Link>
          <Link href="/contact-us">Contact</Link>
          <Link href="/">About</Link>
          </div>
        </div>
        <AuthLinks/>
      </div>
    </div>
  )
}                          
export default Navbar
