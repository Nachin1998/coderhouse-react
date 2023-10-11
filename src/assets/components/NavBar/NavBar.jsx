import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        
        <a className="navbar-brand">Home</a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto justify-content-center"> {/* Center menu items */}
            <li className="nav-item">
              <Link to ={'/contact-us'}><a className="nav-link">Contact Us</a></Link>
            </li>
            <li className="nav-item">
              <a className="nav-link">About us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Catalog</a>
            </li>
            <li className="nav-item">
              <CartWidget />
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;