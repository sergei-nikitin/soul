import React from 'react';
import { Link } from 'react-router-dom';

import img from '../../assets/images/defaultButle.png';
import s from './EmptyCart.module.scss';

export const EmptyCart = () => {
  return (
    <div className={s.wrapper}>
      <img className={s.img} src={img} alt="img" />
      <div>
        <p className={s.text}>No perfumes in your cart</p>
        <Link className={s.link} to="/">
          CONTINUE SHOPPING
        </Link>
      </div>
    </div>
  );
};
