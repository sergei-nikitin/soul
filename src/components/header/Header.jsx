import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import logo from '../../images/icons/logo.svg';
// import linkhover from '../../images/icons/linkHover.svg';
import cart from '../../images/icons/cart.svg';
import arrov from '../../images/icons/navArrov.svg';
import s from './Header.module.scss';

const Header = () => {
  const setActive = ({ isActive }) =>
    isActive ? [s.navLink, s.activeLink].join(' ') : s.navLink;

  return (
    // <header className={[s.header, s.conatainer].join(' ')}>
    <header className={s.header}>
      <div className={s.wrapper}>
        <Link to="/">
          <img className={s.logo} src={logo} alt="logo" />
        </Link>

        <nav className={s.navBlock}>
          <NavLink to="/" className={setActive}>
            home
          </NavLink>
          <NavLink to="/about-us" className={setActive}>
            about us
          </NavLink>

          <div className={s.select}>
            <div className={s.span}></div>
            <NavLink to="/collection" className={setActive}>
              collection
              <img className={s.navArrov} src={arrov} alt="hover" />
            </NavLink>
            <NavLink to="/treasure" className={setActive}>
              treasure
            </NavLink>
            <NavLink to="/seduction" className={setActive}>
              seduction
            </NavLink>
            <NavLink to="/twirl" className={setActive}>
              twirl
            </NavLink>
          </div>

          <NavLink to="/contacts" className={setActive}>
            contacts
          </NavLink>
        </nav>
        <Link
          onMouseOver={() => console.log('hello')}
          to="/cart"
          className={s.cartLink}>
          <img src={cart} alt="cart" /> cart
          <span>(2)</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
