import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { services } from '../../data/ServicesToSell/ServicesToSell.js';
import { categories } from '../../data/Categories/Categories.js';
import './Services.css'; 

const Services = () => {
  const { categoryId  } = useParams();
  const navigate = useNavigate();

  const GoBack = () => {
    navigate(`/categories`);
  }

  const selectedCategory = categories.find(category => category.id === categoryId );
  const servicesToShow = selectedCategory
  ? services.filter(service => selectedCategory.serviceIds.includes(service.id))
  : [];

  return (
    <div className="services-container">
      <h1 className="services-title">Services</h1>
      <div>
        <ul className="services-list">
          {servicesToShow.map((service) => (
            <div className="services-item" key={service.id}>
              <li>
                <Link to={`/categories/${categoryId}/${service.id}`} className="services-link">
                  {service.name}
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </div>
      <button onClick={GoBack} className="go-back-button">
        Go Back
      </button>
    </div>
  );
};

export default Services;