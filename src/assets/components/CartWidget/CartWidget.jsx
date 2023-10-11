import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';

const CartWidget = () => {
  const itemCount = 5; 

  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
      <span className="badge cart-label">{itemCount}</span>
    </div>
  );
};

export default CartWidget;