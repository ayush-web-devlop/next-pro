import React from 'react'

function Pagination() {
  return (
    <div className='flex justify-between'>
      <button className='p-3 bg-red-500 text-white rounded-lg cursor-pointer'>Previous</button>
      <button className='p-3 bg-red-500 text-white rounded-lg cursor-pointer'>Next</button>
    </div>
  )
}

export default Pagination
