import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

const ItemListContainer = ({ greeting }) => {
  return (
    <Container className="mt-4">
      <Jumbotron>
        <h1>{greeting}</h1>
        <p>Bienvenido a nuestra tienda online</p>
      </Jumbotron>
    </Container>
  );
};

export default ItemListContainer;