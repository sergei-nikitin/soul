import React from 'react';
import { Link } from 'react-router-dom';

import butle from '../../../assets/images/butles/red.png';
import bg from '../../../assets/images/home/seduction-bg.png';
import s from './MiniProducts.module.scss';

export const SeductionMini = () => {
  return (
    <>
      <Link className={s.wrapper} to="/seduction">
        <img className={s.bg} src={bg} alt={bg} />
        <img className={s.butle} src={butle} alt="butle" />
        <p className={s.name}>seduction</p>
      </Link>
    </>
  );
};
