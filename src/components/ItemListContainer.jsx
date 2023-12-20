import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const ItemListContainer = ({greeting, productsData}) =>{
    console.log(productsData)
    return(
        <div style={{fontWeight: "bold",  textAlign:"center", color:"skyblue", width:"80vw", height: "300vh"}}>
            <div style={{fontSize: "2rem"}}>{greeting}</div>
            <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
                {
                    productsData.map(products =>{
                        return(
                            <Card bg="dark" text="info" key={products.id} style={{ width: '18rem' }}>
                            <Link to={`/item/${products.id}`}>
                            <Card.Img variant="top" src={products.image}/>
                            </Link>
                            <Card.Body>
                            <Card.Title>{products.title}</Card.Title>
                            <Card.Text>
                            {products.description}
                            </Card.Text>
                            <div>{products.stock} en venta</div>
                            <div>${products.price}</div>
                            <Button variant="primary">Go somewhere</Button>
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