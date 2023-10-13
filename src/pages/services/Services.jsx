import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../assets/components/ServicesToSell/ServicesToSell.jsx';
import './Services.css'; 

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Services</h1>
      <div>
        <ul className="services-list">
          {services.map((service) => (
            <div className="services-item" key={service.id}>
              <li>
                <Link to={`/services/${service.id}`} className="services-link">
                  {service.name}
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;