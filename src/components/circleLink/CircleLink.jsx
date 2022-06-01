import React from 'react';
import { Link } from 'react-router-dom';

import s from './CircleLink.module.scss';

import arrow from '../../images/icons/link-arrow.svg';

const CircleLink = ({ name, path }) => {
  return (
    <Link className={s.link} to={{ pathname: path }}>
      <p className={s.name}>{name}</p>
      <img className={s.arrow} src={arrow} alt="arrow" />
    </Link>
  );
};
export default CircleLink;
