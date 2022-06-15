import React from 'react';
import { Link } from 'react-router-dom';

import s from './LinkTo.module.scss';

const LinkTo = ({ name, path }) => {
  return (
    <div className={s.wrapper}>
      <Link className={s.link} to={{ pathname: path }}>
        {name}
      </Link>
    </div>
  );
};
export default LinkTo;
