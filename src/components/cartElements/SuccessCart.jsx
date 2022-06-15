import React from 'react';
import { Link } from 'react-router-dom';

import img from '../../assets/images/cartFlower.png';
import s from './SuccessCart.module.scss';

export const SuccessCart = () => {
  return (
    <div className={s.wrapper}>
      <img className={s.img} src={img} alt="img" />
      <div className={s.info}>
        <p className={s.text}>Your order successfully been placed</p>
        <p className="text">We will contact you during the day</p>
        <Link className={s.link} to="/">
          CONTINUE SHOPPING
        </Link>
      </div>
    </div>
  );
};
