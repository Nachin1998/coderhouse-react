import { Link } from 'react-router-dom';
import "./Purchase.css"

const Purchase = ({ servicesToBuy }) => {
    const serviceCount = servicesToBuy.reduce((acc, serviceId) => {
      acc[serviceId] = (acc[serviceId] || 0) + 1;
        return acc;
    }, {});

    return (
        <div>
            <div className="services-container">
                <h2 className="services-title">Services to Buy</h2>
                <ul className="services-list">
                    {Object.entries(serviceCount).map(([serviceId, count]) => (
                        <li className="services-link" key={serviceId}>
                            Service ID: {serviceId} - Quantity: {count}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                
            </div>

            <div>
                {/* Button to accept the purchase and go to the /checkout route */}
                <Link to="/checkout">
                    <button className="purchase-button">Accept Purchase</button>
                </Link>

                {/* Button to continue shopping and go to the /categories route */}
                <Link to="/categories">
                    <button className="continue-shopping-button">Continue Shopping</button>
                </Link>
            </div>
        </div>
    );
};
  
  export default Purchase;