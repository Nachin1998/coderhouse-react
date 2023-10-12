import React from 'react';
import { useParams } from 'react-router-dom';
import { services } from '../ServicesToSell/ServicesToSell.jsx'

const ServiceItem = () => {

  const { id } = useParams();
  console.log(id);
  const service = services.find((service) => service.id === id);

  return (
    <div>
      <h2>Service:</h2>
      <h3>{service.name}</h3>
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceItem;