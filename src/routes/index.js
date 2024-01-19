import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Events from '../pages/Events';
import AboutUs from '../pages/AboutUs';
import Speakers from '../pages/Speakers';
function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path='about' element={<AboutUs />} />
          <Route path="speakers" element={<Speakers />} />
          <Route path="events" element={<Events />} />
          <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
      )
}

export default Router;