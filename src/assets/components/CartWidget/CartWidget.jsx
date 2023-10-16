import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';

const CartWidget = () => {
  const [itemCount, setItemCount] = useState(5);

  const IncreaseItemCount = () => {
    setItemCount(itemCount + 1);
  };

  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
      <span className="badge cart-label">{itemCount}</span>
      <button onClick={IncreaseItemCount}>Increase Count</button>
    </div>
  );
};

export default CartWidget;