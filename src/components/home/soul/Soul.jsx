import React from 'react';
import { Link } from 'react-router-dom';

import img from '../../../assets/images/home/soul.png';
import s from './Soul.module.scss';

const Soul = () => {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.descr}>
          <h2 className={s.title}>SOUL OF MINE PERFUME</h2>
          <p className="text">
            Is carried in over 100 stores across 18 countries.
          </p>
          <Link className={s.link} to="/collection">
            LEARN MORE
          </Link>
        </div>
        <img className={s.img} src={img} alt="img" />
      </div>
    </section>
  );
};
export default Soul;
