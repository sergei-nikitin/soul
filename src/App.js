import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import MobHeader from './components/mobHeader';
import Footer from './components/footer';
import { Home } from './pages/home/Home';
import { AboutUs } from './pages/about-us/AboutUs';
import { Collection } from './pages/collection/Collection';
import { Twirl } from './pages/twirl/Twirl';
import { Treasure } from './pages/treasure/Treasure';
import { Seduction } from './pages/seduction/Seduction';
import { Contacts } from './pages/contacts/Contacts';
import { CartPage } from './pages/cart/Cart';

function App() {
  // const footer = React.useRef();

  // let headerHeight = header.current.clientHeight;
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
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
