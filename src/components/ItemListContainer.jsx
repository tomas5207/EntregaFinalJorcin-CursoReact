import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



const ItemListContainer = ({greeting, productsData}) =>{
    console.log(productsData)
    
    return(
        <div style={{fontWeight: "bold",  textAlign:"center", color:"skyblue"}}>
            <div style={{fontSize: "2rem"}}>{greeting}</div>
            <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
                {
                    productsData.map(products =>{
                        console.log(products)
                        return(
                            <Card bg="dark" text="info" key={products.id} style={{ width: '18rem' }}>
                            <Link to={`/item/${products.id}`}>
                            <Card.Img variant="top" src={products.image}/>
                            </Link>
                            <Card.Body>
                            <Card.Title>{products.title}</Card.Title>
                            <div>{products.stock} en venta</div>
                            <div>${products.price}</div>
                            <Link to={`/item/${products.id}`}>
                            <Button variant="primary">Ver detalles</Button>
                            </Link>
                            </Card.Body>
                            </Card> 
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ItemListContainer;