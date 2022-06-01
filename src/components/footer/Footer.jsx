import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import logo from '../../images/icons/logo.svg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import fb from '../../images/icons/fb.svg';
import insta from '../../images/icons/insta.svg';
import twit from '../../images/icons/twiter.svg';
import ball from '../../images/icons/ball.svg';
import s from './Footer.module.scss';

const Footer = () => {
  const setActive = ({ isActive }) =>
    isActive ? [s.navLink, s.activeLink].join(' ') : s.navLink;
  return (
    <>
      <footer className={s.footer}>
        <div className={s.main}>
          <div className={s.logoWrapper}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <p className={s.lozung}>
            it's about
            <br />
            love.
          </p>
          <ul className={s.nav}>
            <li>
              <Link to="/">
                <img className={s.logo} src={logo} alt="logo" />
              </Link>
            </li>
            <li>
              <NavLink className={setActive} to="/">
                home
              </NavLink>
            </li>
            <li>
              <NavLink className={setActive} to="/about-us">
                about us
              </NavLink>
            </li>
            <li>
              <NavLink className={setActive} to="/collection">
                collection
              </NavLink>
            </li>
            <li>
              <NavLink className={setActive} to="/contacts">
                contacts
              </NavLink>
            </li>
          </ul>
          <div className={s.telIconsWrap}>
            <a className={s.tel} href="tel:+971501871707">
              +971501871707
            </a>
            <div className={s.social}>
              <a href="#">
                <img src={ball} alt="ball" />
              </a>
              <a href="#">
                <InstagramIcon />
              </a>
              <a href="#">
                <TwitterIcon />
              </a>
              <a href="#">
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className={s.subFooter}>
        <p>Copyright 2022</p>
        <p>All rights reserved</p>
        <p>Cookie settings</p>
        <p>Privacy policy</p>
      </div>
    </>
  );
};

export default Footer;
