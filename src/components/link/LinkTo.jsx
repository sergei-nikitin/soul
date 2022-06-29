import React from 'react';
import { Link } from 'react-router-dom';

import s from './LinkTo.module.scss';

export const LinkTo = ({ path, name }) => {
  return (
    <Link className={s.link} to={{ pathname: path }}>
      {name ? name : 'LEARN MORE'}
    </Link>
  );
};
