import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AuthLinks from '../authLinks/AuthLinks'

function Navbar() {
  return (
    <div className='flex justify-between items-center'>
      <div className='md:flex gap-2 hidden'>   
        <Image src="/facebook.png" width={24} height={24} alt='facebook img'/>
        <Image src="/instagram.png" width={24} height={24} alt='instagram img'/>
        <Image src="/youtube.png" width={24} height={24} alt='youtube image'/>
      </div>
      <div className='font-bold text-3xl'>&quot;Warrior Path&quot;</div>
      <div className='md:flex md:flex-row gap-3 flex-col'>
        <div className='hidden md:flex'>
          <div className='flex gap-3 flex-col md:flex-row cursor-pointer'>
          <Link href="/">Homepage</Link>
          </div>
        </div>
      </div>
    </div>
  )
}                          
export default Navbar
