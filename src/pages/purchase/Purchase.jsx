import { Link } from 'react-router-dom';
import PurchaseItem from "../../assets/components/PurchaseItem/PurchaseItem.jsx"
import { services } from "../../data/ServicesToSell/ServicesToSell.js"
import "./Purchase.css"

const Purchase = ({ servicesToBuy }) => {
    const serviceCount = servicesToBuy.reduce((acc, serviceId) => {
        acc[serviceId] = (acc[serviceId] || 0) + 1;
        return acc;
    }, {});

    const totalCost = Object.entries(serviceCount).reduce((total, [serviceId, count]) => {
        const service = services.find(item => item.id === serviceId);
        if (service) {
            return total + (service.price * count);
        }
        return total;
    }, 0);
    
    return (
        <div>
            <div className="services-container">
                <h2 className="services-title">Services to Buy</h2>
                <ul className="services-list">
                    {Object.entries(serviceCount).map(([serviceId, count]) => {
                        const service = services.find(item => item.id === serviceId);
                        if (service) {
                            return (
                                <li className='purchase-item' key={serviceId}>
                                    <PurchaseItem id={serviceId} amount={count} duration={service.duration * count} price={service.price * count} />
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>

            <div className="services-container">
                <div className="calculation-panel">
                    <h2>Total Purchase Value</h2>
                    <p>${totalCost.toFixed(2)}</p>
                </div>
            </div>

            <div className="services-container">
                <Link to="/checkout">
                    <button className="purchase-button">Accept Purchase</button>
                </Link>

                <Link to="/categories">
                    <button className="continue-shopping-button">Continue Shopping</button>
                </Link>
            </div>
        </div>
    );
};

export default Purchase;