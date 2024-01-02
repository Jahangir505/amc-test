import SingleProduct from '@/modules/single-product/SingleProduct'
import React from 'react'

export default function Page({ params }) {
  return (
    <SingleProduct {...params}/>
  )
}
