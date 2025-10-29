import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className='product-card-area'>
      <img src={item?.img} alt="" />
      <div>{item?.choice==true?"Conscious choice":""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new==true?"NEW":""}</div>
    </div>
  )
}

export default ProductCard
