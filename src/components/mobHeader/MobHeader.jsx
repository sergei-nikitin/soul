import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import logo from '../../images/icons/logo.svg';
import cart from '../../images/icons/cart.svg';
import arrov from '../../images/icons/blackArrow.svg';
import close from '../../images/icons/close.svg';
import s from './MobHeader.module.scss';

const MobHeader = () => {
  const [menu, setMenu] = React.useState(false);
  const [items, setItems] = React.useState(false);

  const closeMenu = () => {
    setMenu(!menu);
  };
  const setActive = ({ isActive }) =>
    isActive ? [s.navLink, s.activeLink].join(' ') : s.navLink;
  const setActiveItem = ({ isActive }) =>
    isActive ? [s.item, s.activeItem].join(' ') : s.item;

  return (
    <div className={s.header}>
      <Link className={s.logo1} to="/">
        <img className={s.logo} src={logo} alt="logo" />
      </Link>

      <Link className={s.cart} to="/cart">
        <img className={s.cart} src={cart} alt="logo" />
        <p>
          cart <span>(2)</span>
        </p>
      </Link>
      <Link className={s.logo2} to="/">
        <img className={s.logo} src={logo} alt="logo" />
      </Link>
      <button onClick={closeMenu} className={s.burger} type="button"></button>

      <div
        className={
          menu ? [s.menuWrapper, s.menuWrapperActive].join(' ') : s.menuWrapper
        }>
        <button onClick={closeMenu} className={s.close} type="button">
          <img src={close} alt="close" />
        </button>
        <NavLink onClick={closeMenu} to="/" className={setActive}>
          <span>01</span>
          home
        </NavLink>
        <NavLink onClick={closeMenu} to="/about-us" className={setActive}>
          <span>02</span>
          about us
        </NavLink>
        <div className={s.scollectionWrapper}>
          <NavLink
            onClick={closeMenu}
            to="/collection"
            className={s.collectionsLink}>
            <span>03</span>
            collections
          </NavLink>
          <img onClick={() => setItems(!items)} src={arrov} alt="img" />
        </div>
        {items && (
          <div className={s.items}>
            <NavLink onClick={closeMenu} className={setActiveItem} to="/twirl">
              twirl
            </NavLink>
            <NavLink
              onClick={closeMenu}
              className={setActiveItem}
              to="/treasure">
              treasure
            </NavLink>
            <NavLink
              onClick={closeMenu}
              className={setActiveItem}
              to="/seduction">
              seduction
            </NavLink>
          </div>
        )}
        <NavLink onClick={closeMenu} to="/contacts" className={setActive}>
          <span>04</span>
          contacts
        </NavLink>
      </div>
    </div>
  );
};

export default MobHeader;
