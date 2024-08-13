import React from 'react'
import Pagination from '../pagination/Pagination'
import Image from 'next/image'
import Card from '../card/Card'

function CardList() {
  return (
    <div className='flex-[5] hidden md:block'>
      <h1 className='my-[50px] font-bold text-2xl '>Recent Posts</h1>
      <div className='hidden md:block'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Pagination/>
    </div>
  )
}

export default CardList
