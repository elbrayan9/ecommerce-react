import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () => {
  const categories = ['Electrónicos', 'Ropa', 'Libros'];
  
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Mi Tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {categories.map((category, index) => (
              <Nav.Link key={index} href={`#${category}`}>
                {category}
              </Nav.Link>
            ))}
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;