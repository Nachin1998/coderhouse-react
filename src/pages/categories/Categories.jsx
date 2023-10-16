import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/Categories/Categories.js';
import './Categories.css'; 

const Categories = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Categories</h1>
      <div>
        <ul className="services-list">
          {categories.map((category) => (
            <div className="services-item" key={category.id}>
              <li>
                <Link to={`/categories/${category.id}`} className="services-link">
                  {category.name}
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;