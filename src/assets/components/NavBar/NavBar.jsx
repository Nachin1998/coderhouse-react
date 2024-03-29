import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({itemCount, ClearAllItems}) => {

  const location = useLocation();

  const HandleClearButton = () => {
    if (itemCount > 0 && !location.pathname.startsWith('/purchase')) {
      return <button onClick={ClearAllItems}>Clear All Items</button>;
    }
    return null;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto justify-content-center">

            <li className="nav-item">
              <Link to={'/'}><a className="nav-link">Home</a></Link>
            </li>

            <li className="nav-item">
              <Link to={'/contact-us'}><a className="nav-link">Contact Us</a></Link>
            </li>

            <li className="nav-item">
              <Link to={'/about-us'}><a className="nav-link">About us</a></Link>
            </li>

            <li className="nav-item">
              <Link to={'/categories'}><a className="nav-link">Services</a></Link>
            </li>

            <li className="nav-item">
              <CartWidget itemCount={itemCount} />
            </li>

            {HandleClearButton()}

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;