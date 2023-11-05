import React, { useState } from 'react';
import Navbar from './assets/components/NavBar/NavBar.jsx';
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/home/Home.jsx'
import AboutUs from './pages/about-us/AboutUs.jsx'
import ContactUs from './pages/contact-us/ContactUs.jsx'
import Services from './pages/services/Services.jsx'
import Categories from './pages/categories/Categories.jsx'
import ServiceItem from './assets/components/ServiceItem/ServiceItem.jsx'
import NotFound from './pages/not-found/NotFound.jsx'
import Purchase from './pages/purchase/Purchase.jsx';
import Checkout from './pages/checkout/Checkout.jsx';

function App() {
  const [servicesSelected, SetServiceSelected] = useState([]);

  const AddItem = (serviceId) => {

    const updatedServicesSelected = [...servicesSelected, serviceId];
    SetServiceSelected(updatedServicesSelected);
  }

  const RemoveItem = (serviceId) => {
    const indexToRemove = servicesSelected.indexOf(serviceId);

    if (indexToRemove !== -1) {
      const updatedServicesSelected = [...servicesSelected];
      updatedServicesSelected.splice(indexToRemove, 1);
      SetServiceSelected(updatedServicesSelected);
    }
  }

  return (
    <BrowserRouter>
      <div>
        <Navbar itemCount={servicesSelected.length} />
        <ItemListContainer greeting="Firepunch Studios" />

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
          <Route path="/contact-us" element={<ContactUs></ContactUs>}></Route>
          <Route path="/categories" element={<Categories></Categories>}></Route>
          <Route path="/categories/:categoryId" element={<Services></Services>}></Route>
          <Route path="/categories/:categoryId/:serviceId" element={<ServiceItem AddItem={AddItem} RemoveItem={RemoveItem}></ServiceItem>}></Route>
          <Route path="/purchase" element={<Purchase></Purchase>}></Route>
          <Route path="/checkout" element={<Checkout></Checkout>}></Route>
          <Route path="/*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;