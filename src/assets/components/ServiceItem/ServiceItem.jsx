import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { services } from '../../../data/ServicesToSell/ServicesToSell.js';
import './serviceItem.css'; // Import the CSS file

const ServiceItem = ({increase, decrease}) => {
  const { categoryId, serviceId } = useParams();
  const navigate = useNavigate();
  const service = services.find((service) => service.id === serviceId);

  const GoBack = () => {
    navigate(`/categories/${categoryId}`);
  };

  return (
    <div className="service-item-container">
      <h2 className="service-title">Service:</h2>
      <h3 className="service-name">{service.name}</h3>
      <p className="service-description">{service.description}</p>
      <div>
        <button onClick={increase} className="go-back-button">
          +
        </button>
        <button onClick={decrease} className="go-back-button">
          -
        </button>
      </div>

      <button onClick={GoBack} className="go-back-button">
        Go Back
      </button>
    </div>
  );
};

export default ServiceItem;
