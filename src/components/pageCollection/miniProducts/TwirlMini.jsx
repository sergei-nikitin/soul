import React from 'react';
import { Link } from 'react-router-dom';

import butle from '../../../assets/images/butles/white.png';
import bg from '../../../assets/images/home/twirl-bg.png';
import s from './MiniProducts.module.scss';

export const TwirlMini = () => {
  return (
    <>
      <Link className={s.wrapper} to="/twirl">
        <img className={s.bg} src={bg} alt={bg} />
        <img className={s.butle} src={butle} alt="butle" />
        <p className={s.name}>twirl</p>
      </Link>
    </>
  );
};
