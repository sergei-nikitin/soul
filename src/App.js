import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import MobHeader from './components/mobHeader';
import Footer from './components/footer';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { Collection } from './pages/Collection';
import { Twirl } from './pages/Twirl';
import { Treasure } from './pages/Treasure';
import { Seduction } from './pages/Seduction';
import { Contacts } from './pages/Contacts';
import { CartPage } from './pages/Cart';
import { SuccessOrder } from './pages/SuccessOrder';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MobHeader />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/twirl" element={<Twirl />} />
          <Route path="/treasure" element={<Treasure />} />
          <Route path="/seduction" element={<Seduction />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/succes-oreder" element={<SuccessOrder />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
