'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const AuthLinks = () => {

    const [open, setOpen] = useState(false)

    const status = "notauthenticated"

  return (
    <div className='flex gap-4 items-center'>
     
      <div className='flex flex-col mt-5'>
        <div className='w-[20px] h-[16px] flex flex-col justify-between md:hidden relative'
        onClick={() => setOpen(!open)}
        >
          <div className='w-full h-[2px] bg-white '></div>
          <div className='w-full h-[2px] bg-white '></div>
          <div className='w-full h-[2px] bg-white '></div>
        </div>

        {open && (
          <div className='flex gap-[30px] font-[80px] text-[25px] flex-col justify-center items-center h-[100vh] w-full absolute top-[50px] right-[0px] bg-black z-[1] ' >
            <Link href="/" onClick={() => setOpen(!open)}>Homepage</Link>
            {/* <Link href="/contact-us" onClick={() => setOpen(!open)}>Contact</Link>
            <Link href="/" onClick={() => setOpen(!open)}>About</Link>
            {status === "notauthenticated" ? 
            (<Link href="/login" onClick={() => setOpen(!open)}>Login</Link>) : 
            (
            <div className='flex gap-3'>
            <Link href="/write" onClick={() => setOpen(!open)}>Write</Link>
            <span className=''>Logout</span>
            </div>
            )} */}
          </div>
        )}
      </div>
    </div>
  )
}

export default AuthLinks
