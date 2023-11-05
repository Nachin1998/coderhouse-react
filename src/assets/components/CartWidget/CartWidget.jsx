import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = ({ itemCount }) => {
  
  const HandlePurchaseLogic = () => {
    const purchasePage = "/purchase";
    const location = useLocation();
    const isInPurchaseRoute = location.pathname === purchasePage;
    if(itemCount > 0 && !isInPurchaseRoute){
      return <Link to={purchasePage}>Purchase</Link>;
    }
  
    return null;
  }

  return (
    <button className="cart-button">
      <div>
        <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
        <span className="badge cart-label">{itemCount}</span>
      </div>
      {HandlePurchaseLogic()}
    </button>
  );
};

export default CartWidget;