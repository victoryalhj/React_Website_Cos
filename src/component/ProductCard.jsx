import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate()

  if (!item) return null
  
  const showDetail= ()=>{
    navigate(`/product/${item.id}`)
  }
  return (
    <div className='product-card-area' onClick={showDetail}>
      <img src={item?.img} alt="" />
      <div>{item?.choice==true?"Conscious choice":""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new==true?"NEW":""}</div>
    </div>
  )
}

export default ProductCard
