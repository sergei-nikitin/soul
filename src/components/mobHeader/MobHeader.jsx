import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ReactComponent as Burger } from '../../assets/images/icons/burger-btn.svg';
import { ReactComponent as Close } from '../../assets/images/icons/close.svg';
import { ReactComponent as Ball } from '../../assets/images/icons/ball.svg';
import { ReactComponent as Insta } from '../../assets/images/icons/insta.svg';
import { ReactComponent as Twiter } from '../../assets/images/icons/twiter.svg';
import { ReactComponent as FaceBook } from '../../assets/images/icons/fb.svg';
import letter from '../../assets/images/Vector-1.png';
import contur from '../../assets/images/Vector.png';
import cart from '../../assets/images/icons/cart.svg';
import arrov from '../../assets/images/icons/collection-arrov.svg';
import s from './MobHeader.module.scss';

const MobHeader = () => {
  const mobHeader = React.useRef();
  const { items } = useSelector((state) => state.cart);
  const [menu, setMenu] = React.useState(false);
  const [rotate, setRotate] = React.useState(false);
  const [selectItems, setSelectItems] = React.useState(false);

  const closeMenu = () => {
    setMenu(!menu);
    setSelectItems(false);
  };
  const setActive = ({ isActive }) =>
    isActive ? [s.navLink, s.activeLink].join(' ') : s.navLink;

  // const setActiveItem = ({ isActive }) =>
  //   isActive ? [s.item, s.activeItem].join(' ') : s.item;

  const select = () => {
    setRotate(!rotate);
    setSelectItems(!selectItems);
  };

  const [show, setShow] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);
  // className={show ? 'mobHeader' : 'mobHeaderHidden'}
  return (
    <header ref={mobHeader} className={show ? 'mobHeader' : 'mobHeaderHidden'}>
      {menu ? (
        <Close onClick={closeMenu} className={s.burger} />
      ) : (
        <Burger onClick={closeMenu} className={s.burger} />
      )}

      <Link className={s.logoWrapper} to="/">
        <img className={s.contur} src={contur} alt="logo" />
        <img className={s.letter} src={letter} alt="logo" />
      </Link>

      <Link className={s.cart} to="/cart">
        <img className={s.cart} src={cart} alt="logo" />
        {items.leght > 0 && <span>( {items.length} )</span>}
      </Link>

      {/* menu */}

      <div
        className={
          menu ? [s.menuWrapper, s.menuWrapperActive].join(' ') : s.menuWrapper
        }>
        <div className={s.linksWrapper}>
          <NavLink onClick={closeMenu} className={setActive} to="/">
            home
          </NavLink>
          <NavLink onClick={closeMenu} className={setActive} to="/about-us">
            about us
          </NavLink>
          <span onClick={select} className={s.navLink} to="/">
            collection
            <img
              className={rotate ? [s.arrov, s.rotate].join(' ') : s.arrov}
              src={arrov}
              alt="icon"
            />
          </span>

          {selectItems && (
            <div className={s.list}>
              <NavLink onClick={closeMenu} className={setActive} to="/twirl">
                twirl
              </NavLink>
              <NavLink onClick={closeMenu} className={setActive} to="/treasure">
                treasure
              </NavLink>
              <NavLink
                onClick={closeMenu}
                className={setActive}
                to="/seduction">
                seduction
              </NavLink>
            </div>
          )}

          <NavLink onClick={closeMenu} className={setActive} to="/contacts">
            contacts
          </NavLink>
        </div>
        <div className={s.info}>
          <a className={s.tel} href="tel:+971501871707">
            +971501871707
          </a>
          <div className={s.socLinks}>
            <a href="#">
              <Ball />
            </a>
            <a href="#">
              <Insta />
            </a>
            <a href="#">
              <Twiter />
            </a>
            <a href="#">
              <FaceBook />
            </a>
          </div>
        </div>
      </div>

      {/* <div
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
      </div> */}
    </header>
  );
};

export default MobHeader;
