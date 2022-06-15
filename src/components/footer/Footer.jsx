import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFooterHeight } from '../../redux/slices/heightSlice';

import logo from '../../assets/images/icons/LogoFooter.svg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
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
          <Link to="/">
            <img className={s.logo} src={logo} alt="logo" />
          </Link>

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

          <div className={s.contacts}>
            <p>CONTACTS</p>
            <a className={s.tel} href="tel:+971501871707">
              +971501871707
            </a>
            <div className={s.social}>
              <a href="#">
                <Ball className={s.ball} />
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
        <div className={s.subFooter}>
          <p>© 2022 COPYRIGHT Soul of mine</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
