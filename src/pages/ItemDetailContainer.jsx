import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useGetProductsById } from '../hooks/useProducts'
import { useParams } from 'react-router-dom'
import ItemCount from '../components/ItemCount';


export const ItemDetailContainer = () => {
  const { id } = useParams()
  const {productData} = useGetProductsById(id)
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
    <ItemCount productId={productData.id} 
    productName={productData.title} 
    productDescription={productData.description} 
    productPrice={productData.price}
    productImage={productData.image}/>
    </Card.Body>
    </Card> 
  )
  
}

}