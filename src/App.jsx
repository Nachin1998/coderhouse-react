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

function App() {
  const [itemCount, setItemCount] = useState(0);
  
  const IncreaseItemCount = () => {
    setItemCount(itemCount + 1);
  };

  const DecreaseItemCount = () => {
    if(itemCount - 1 >= 0)
    {
      setItemCount(itemCount - 1);
    }
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar itemCount={itemCount}/>
        <ItemListContainer greeting="Firepunch Studios" />

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
          <Route path="/contact-us" element={<ContactUs></ContactUs>}></Route>
          <Route path="/categories" element={<Categories></Categories>}></Route>
          <Route path="/categories/:categoryId" element={<Services></Services>}></Route>
          <Route path="/categories/:categoryId/:serviceId" element={<ServiceItem increase={IncreaseItemCount} decrease={DecreaseItemCount}></ServiceItem>}></Route>
          <Route path="/*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;