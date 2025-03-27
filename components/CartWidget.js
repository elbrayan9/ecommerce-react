import React from 'react';
import { Badge } from 'react-bootstrap';
import { Cart3 } from 'react-bootstrap-icons';

const CartWidget = () => {
  return (
    <div style={{ position: 'relative', marginRight: '20px' }}>
      <Cart3 size={30} color="white" />
      <Badge 
        bg="danger"
        style={{ position: 'absolute', top: '-10px', right: '-15px' }}
      >
        5
      </Badge>
    </div>
  );
};

export default CartWidget;