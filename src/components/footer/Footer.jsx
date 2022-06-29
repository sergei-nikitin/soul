import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFooterHeight } from '../../redux/slices/heightSlice';

import { LogoFooter } from './LogoFooter';
import { ReactComponent as InstagramIcon } from '../../assets/images/icons/Instagram.svg';
import { ReactComponent as TwitterIcon } from '../../assets/images/icons/twiter.svg';
import { ReactComponent as FacebookIcon } from '../../assets/images/icons/Facebook.svg';
import { ReactComponent as Ball } from '../../assets/images/icons/ball.svg';
import s from './Footer.module.scss';

const Footer = () => {
  const footer = React.useRef();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const footerHeight = footer.current.clientHeight;
    dispatch(addFooterHeight(footerHeight));
  }, []);

  const setActive = ({ isActive }) =>
    isActive ? [s.navLink, s.activeLink].join(' ') : s.navLink;
  return (
    <>
      <footer ref={footer} className={s.footer}>
        <div className={s.main}>
          <div className={s.logoWrapper}>
            <LogoFooter />
          </div>

          <ul className={s.nav}>
            <li key="menu">MENU</li>

            <li key="home">
              <NavLink className={setActive} to="/">
                Home
              </NavLink>
            </li>
            <li key="about-us">
              <NavLink className={setActive} to="/about-us">
                About Us
              </NavLink>
            </li>
            <li key="collection">
              <NavLink className={setActive} to="/collection">
                Collection
              </NavLink>
            </li>
            <li key="contacts">
              <NavLink className={setActive} to="/contacts">
                Contacts
              </NavLink>
            </li>
          </ul>
          <ul className={s.nav}>
            <li key="DOCUMENTS">DOCUMENTS</li>

            <li key="rights">
              <p>All rights reserved</p>
            </li>
            <li key="Cookie">
              <p>Cookie settings</p>
            </li>
            <li key="policy">
              <p>Privacy policy</p>
            </li>
          </ul>

          <div className={s.conectInfo}>
            <div className={s.contacts}>
              <p>CONTACTS</p>
              <a className={s.tel} href="tel:+971501871707">
                +971501871707
              </a>
            </div>
            <div className={s.socialWrapper}>
              <p>SOCIAL MEDIA</p>
              <div className={s.social}>
                <a href="#">
                  <Ball className={s.icons} />
                </a>
                <a href="#">
                  <InstagramIcon className={s.icons} />
                </a>
                <a href="#">
                  <TwitterIcon className={s.icons} />
                </a>
                <a href="#">
                  <FacebookIcon className={s.icons} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={s.subFooter}>
          <div className={s.textWrapper}>
            <p>© 2022 COPYRIGHT SOUL OF MINE</p>
            <p>Design by All-in Agency. All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
