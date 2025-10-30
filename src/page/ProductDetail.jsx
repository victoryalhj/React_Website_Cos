import React, { useEffect, useState } from 'react'
import { Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'


const ProductDetail = () => {
  let {id} = useParams()
  const [product,setProduct] = useState(null)

  const getProductDetail=async()=>{
    let url = `https://my-json-server.typicode.com/victoryalhj/React_Website_Cos/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    setProduct(data)
  }
  useEffect(()=>{
    getProductDetail()
  },[])

  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img} alt="" />
        </Col>
        <Col className='product-text'>
          <div className='product-title'>{product?.title}</div>
          <div className='product-price'>{product?.price}</div>
          <div>    
            <DropdownButton variant="secondary" id="dropdown-basic-button" title="SIZE">
              <Dropdown.Item href="#/action-1">{product?.size[0]}</Dropdown.Item>
              <Dropdown.Item href="#/action-2">{product?.size[1]}</Dropdown.Item>
              <Dropdown.Item href="#/action-3">{product?.size[2]}</Dropdown.Item>
            </DropdownButton>
          </div>
          <button className='product-add'>ADD TO BAG</button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
