import React from 'react';
import shortid from 'shortid';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { FirstCart } from '../cartElements/FirstCart';
import { EmptyCart } from '../cartElements/EmptyCart';
import { FormCart } from '../cartElements/FormCart';
import { SuccessCart } from '../cartElements/SuccessCart';
import arrow from '../../assets/images/icons/grayArrow.svg';
import s from './Cart.module.scss';

const Cart = () => {
  // const dispatch = useDispatch();
  const { totalPrice, items } = useSelector((state) => state.cart);
  const { headerHeight, footerHeight } = useSelector((state) => state.heights);

  const totalHeight = headerHeight + footerHeight;
  const cartWrapperHeight = window.innerHeight - totalHeight;

  const myComponentStyle = {
    minHeight: cartWrapperHeight + 'px',
  };

  return (
    <div style={myComponentStyle} className={s.cartWrapper}>
      <FirstCart />
      <EmptyCart />
      <FormCart />
      <SuccessCart />
    </div>
  );
};
export default Cart;
