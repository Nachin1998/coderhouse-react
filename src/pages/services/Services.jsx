import React from 'react'
import { Link } from 'react-router-dom'
import { services } from '../../assets/components/ServicesToSell/ServicesToSell.jsx'

const Services = () => {
  return (
    <div>
      <h1>Services</h1>
      <div>
        <ul>
          {services.map((service) => (
            <div>
              <li key={service.id}>
                <Link to={`/services/${service.id}`}>{service.name}</Link>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Services;