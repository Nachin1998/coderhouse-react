import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { services } from '../ServicesToSell/ServicesToSell.jsx';
import './serviceItem.css'; // Import the CSS file

const ServiceItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((service) => service.id === id);

  const goBack = () => {
    navigate('/services');
  };

  return (
    <div className="service-item-container">
      <h2 className="service-title">Service:</h2>
      <h3 className="service-name">{service.name}</h3>
      <p className="service-description">{service.description}</p>
      <button onClick={goBack} className="go-back-button">
        Go Back
      </button>
    </div>
  );
};

export default ServiceItem;
