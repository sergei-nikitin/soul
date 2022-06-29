import React from 'react';
import { Link } from 'react-router-dom';

import butle from '../../../assets/images/butles/blue.png';
import bg from '../../../assets/images/home/treasure-bg.png';
import s from './MiniProducts.module.scss';

export const TreasureMini = () => {
  return (
    <>
      <Link className={s.wrapper} to="/treasure">
        <img className={s.bg} src={bg} alt={bg} />
        <img className={s.butle} src={butle} alt="butle" />
        <p className={s.name}>treasure</p>
      </Link>
    </>
  );
};
