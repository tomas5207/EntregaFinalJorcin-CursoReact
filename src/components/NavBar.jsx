import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { useGetCategories } from '../hooks/useProducts';


function NavBar() {
    const {categories} = useGetCategories();

    return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary ">
    <Container>
        <Link to='/'>E-cards</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        {/*
        <Nav.Item>
            <Nav.Link eventKey="1" href="#home">Home</Nav.Link>
        </Nav.Item>
            <Nav.Link eventKey="1" href="#info">Info</Nav.Link>
        */}
            <NavDropdown title="Card trading" id="basic-nav-dropdown">
            {
                categories.map((category, index) =>{
                    return(
                        <NavDropdown.Item key={index}>
                        <Link key={index} to={`/category/${category.id}`}>{category.name}</Link>
                        </NavDropdown.Item>
                    )
                })
            }
        </NavDropdown>
        </Nav>
    </Navbar.Collapse>
    <CartWidget/>
    </Container>
    </Navbar>
);
}


export default NavBar;