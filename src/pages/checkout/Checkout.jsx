import React, { useEffect, useState } from 'react';
import "./Checkout.css"

const Checkout = () => {

  const GenerateRandomString = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  };

  const [trackingTicket, setTrackingTicket] = useState('');

  useEffect(() => {
    const randomTicket = GenerateRandomString(20);
    setTrackingTicket(randomTicket);
  }, []);

  return (
    <div className="services-container">
      <h2>Successful Purchase</h2>
      <p>Thank you for your purchase! Your order details are below:</p>
      <p>Tracking Ticket: {trackingTicket}</p>
      <p>You may use this ticket whenever we actually make a tracking page lmao</p>
      <p>Thanks for choosing our services. Enjoy!</p>
    </div>
  );
};

export default Checkout;