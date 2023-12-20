import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useGetProductsById } from '../hooks/useProducts'
import { useParams } from 'react-router-dom'


export const ItemDetailContainer = () => {
  const { id } = useParams()
  const {productData} = useGetProductsById(id)
  console.log(productData)
{
  
  return (
    <Card bg="dark" text="info" key={productData.id} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={productData.image}/>
    <Card.Body>
    <Card.Title>{productData.title}</Card.Title>
    <Card.Text>
    {productData.description}
    </Card.Text>
    <div>{productData.stock} en venta</div>
    <div>${productData.price}</div>
    <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card> 
  )
  
}

}