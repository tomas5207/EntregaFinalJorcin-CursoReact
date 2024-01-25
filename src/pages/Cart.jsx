import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import Card from 'react-bootstrap/Card';

export const Cart = () => {
    const { count } = useContext(CartContext);
    
    const rederizarCarrito = () => {
        return count.map(item => <Card bg="dark" text="info" key={item.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.image}/>
        <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
        {item.description}
        </Card.Text>
        <div>{item.quantity} en carrito</div>
        <div>${item.price}</div>
        </Card.Body>
        </Card> );
    }

    console.log(count);
        
    return count.length === 0 ? (<h1 style={{color:"skyblue"}}>No hay items en el carrito</h1>) :  <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>{rederizarCarrito()}</div>
}
