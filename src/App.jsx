// App.js

import React from 'react';
import Navbar from './assets/components/NavBar/NavBar.jsx';
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/home/Home.jsx'
import AboutUs from './pages/about-us/AboutUs.jsx'
import ContactUs from './pages/contact-us/ContactUs.jsx'
import Services from './pages/services/Services.jsx'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <ItemListContainer greeting="Firepunch Studios" />

        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
          <Route path="/contact-us" element={<ContactUs></ContactUs>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;