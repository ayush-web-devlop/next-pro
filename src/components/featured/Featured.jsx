import Image from 'next/image'
import React from 'react'

function Featured() {
  return (
    <div className='mt-[30px]'>
     <h1 className='md:text-[66px] text-[20px] flex items-center '>
      <b>What is Martial Arts?</b>
     </h1> 
     <div className='mt-[60px] flex items-center gap-[50px] md:flex-row flex-col '>
      <div className='md:h-[500px] h-[300px] w-[200px] relative md:flex-1'>
        <Image src="/MartialArt1.jpg" alt='martial arts image' fill className='object-cover ' />
      </div>
      <div className='flex-1 flex flex-col gap-[20px]'>
        <h1 className='font-bold md:text-[40px] text-[20px] '>Martial arts are systems of training for combat and self-defense.</h1>
        <p className='text-[20px] font-[300] '>Some martial arts focus on striking techniques, such as punching and kicking, while others emphasize grappling, joint locks, or weaponry. Many also incorporate elements of physical fitness, mental focus, and philosophical teachings.</p>
        <button className='py-[16px] px-[20px] border-none rounded-lg bg-white text-black w-[max-content] font-medium'>Read More</button>
      </div>
     </div>     
    </div>
  )
}

export default Featured
