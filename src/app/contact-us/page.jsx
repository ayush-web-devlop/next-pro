import Image from 'next/image'
import React from 'react'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

const page = () => {
  return (
    <div>
      <div>
        <Image src= "/phone-icon.png" height={200} width={200} className='text-white bg-white rounded-[1000px]'/>

      </div>
    </div>
  )
}

export default page
