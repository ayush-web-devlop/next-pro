import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CategoryList() {
  return (
    <div>
      <h1 className='my-[50px] font-bold text-2xl '>Popular category</h1>
      <div className='md:flex justify-between items-center '>
        <Link href="/karate" className='flex items-center gap-3 md:w-[15%] w-[100%] h-[80px] justify-center'>
         <Image
         className='w-[32px] h-[32px] rounded-[100%]'
         src="/karate.jpg"
         width={32}
         height={32}
         alt='karateimage'
         />
         Karate
        </Link>
        <Link href={'/taekwondo'} className='flex items-center gap-3 md:w-[15%] w-[100%] h-[80px] justify-center '>
         <Image
         className='w-[32px] h-[32px] rounded-[100%]'
         src="/Tiakwando.jpg"
         width={32}
         height={32}
         alt='tiakwandoimage'
         />
         Taekwondo
        </Link>
        <Link href={'/muay-thai'} className='flex items-center gap-3 md:w-[15%] w-[100%] h-[80px] justify-center '>
         <Image
         className='w-[32px] h-[32px] rounded-[100%]'
         src="/muay-thai.webp"
         width={32}
         height={32}
         alt='muay thai image'
         />
         Muay Thai
        </Link>
        <Link href={'/bjj'} className='flex items-center gap-3 md:w-[15%] w-[100%] h-[80px] justify-center '>
         <Image
         className='w-[32px] h-[32px] rounded-[100%]'
         src="/bjj.jpg"
         width={32}
         height={32}
         alt='bjjimage'
         />
         BJJ
        </Link>
        <Link href={'/judo'} className='flex items-center gap-3 md:w-[15%] w-[100%] h-[80px] justify-center '>
         <Image
         className='w-[32px] h-[32px] rounded-[100%]'
         src="/judo.jpg"
         width={32}
         height={32}
         alt='judoimage'
         />
         Judo
        </Link>
        <Link href={'/kung-fu'} className='flex items-center gap-3 md:w-[15%] w-[100%] h-[80px] justify-center '>
         <Image
         className='w-[32px] h-[32px] rounded-[100%]'
         src="/kung fu.jpg"
         width={32}
         height={32}
         alt='kungfu image'
         />
         Kung Fu
        </Link>
      </div>
    </div>
  )
}

export default CategoryList
