import React from 'react';
import shortid from 'shortid';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CartItem } from './CartItem';
import arrow from '../../assets/images/icons/grayArrow.svg';
import s from './FirstCart.module.scss';

export const FirstCart = () => {
  const { totalPrice, items } = useSelector((state) => state.cart);

  return (
    <>
      <h3 className={s.title}>CART</h3>

      <div className={s.itemsWrap}>
        <div className={s.description}>
          <p className="text">Product</p>
          <p className="text">Quantity</p>
          <p className="text">Price</p>
        </div>
        {items.map((item) => (
          <CartItem key={shortid.generate()} {...item} />
        ))}
      </div>

      <div className={s.info}>
        <p>TOTAL:</p>
        <p className={s.totalPrice}>$ {totalPrice}.00</p>
      </div>
      <div className={s.actions}>
        <Link className={s.link} to="/">
          <img src={arrow} alt="icon" />
          Back
        </Link>
        <button className={s.CHECKOUT} type="button">
          CHECKOUT
        </button>
      </div>
    </>
  );
};
