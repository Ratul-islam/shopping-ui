'use client'


import { usePathname } from 'next/navigation'
import React from 'react'
import { getData, getSingleData } from '@/lib/getdata'
import SingleProduct from "./product"

const Product = () => {
  const pathname = usePathname()
  const product = pathname.slice(9 , 10)
  const data = getSingleData(product)
  return (
    <div>
      <SingleProduct img={data[0].link} name={data[0].name} id={data[0].id} description={data[0].description} price={data[0].price} quantity={data[0].quantity} category={data[0].category} color={data[0].color} />
    </div>
  )
}

export default Product;
