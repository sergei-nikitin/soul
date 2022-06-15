import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addHeaderHeight } from '../../redux/slices/heightSlice';

// import CartPage from '../cart';
import logo from '../../assets/images/icons/logo.svg';
import cartImg from '../../assets/images/icons/cart.svg';
import arrov from '../../assets/images/icons/navArrov.svg';
import s from './Header.module.scss';

const Header = () => {
  const header = React.useRef();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const headerHeight = header.current.clientHeight;
    dispatch(addHeaderHeight(headerHeight));
  }, []);

  const { items, totalPrice } = useSelector((state) => state.cart);

  const [cart, setCart] = React.useState(false);

  const setActive = ({ isActive }) =>
    isActive ? [s.navLink, s.activeLink].join(' ') : s.navLink;

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

  return (
    // <header className={[s.header, s.conatainer].join(' ')}>
    <>
      <header ref={header} className={show ? 'header' : 'headerHidden'}>
        {/* {cart && <Cart closeCart={closeCart} />} */}

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
          <Link to="/cart">
            {totalPrice ? (
              <div onClick={() => setCart(!cart)} className={s.cartLink}>
                <img src={cartImg} alt="cart" /> <p>cart</p>
                {items && <span>( {items.length} )</span>}
              </div>
            ) : (
              <div className={s.cartLinkEmpty}>
                <img src={cartImg} alt="cart" /> <p>cart</p>
              </div>
            )}
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
