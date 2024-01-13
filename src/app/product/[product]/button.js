import React from 'react'

const Button = () => {
  return (
    <div className='flex p-1 items-center justify-center'>
        <div role={'button'} className='w-24 mx-1 text-xs text-center p-2 bg-[#c7689c] text-white font-bold'>Buy Now</div>
        <div role={'button'} className='w-24 mx-1 text-xs text-center p-2 bg-[#5868f4] text-white font-bold'>Add to Cart</div>
    </div>
  )
}

export default Button