import React from 'react';
import { Link } from 'react-router-dom';

import img from '../../../assets/images/home/brand.png';
import s from './Brand.module.scss';

const Brand = () => {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.title}>
          This brand was born <br />
          in great love...
        </h2>
        <div className={s.content}>
          <div className={s.descr}>
            <p className="text">
              These are emotions, who consider a person to adulthood, feelings,
              wings that lift us when it seems tenderness of touch new thoughts
              about familiar things, the highest category of owners, Freedom of
              choice, inserts and desires.
            </p>
            <Link className={s.link} to="/about-us">
              LEARN MORE
            </Link>
          </div>
          <img className={s.img} src={img} alt="foto" />
        </div>
      </div>
      {/* <svg
        className={s.svg}
        width="123"
        height="293"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M56.906 37.342c5.166-19 19.3-51.3 34.5-28.5 19 28.5 50.5 17 12 51s-36.5 2-52 42-23.5 27-15.5 65.5c6.4 30.8 21 96.166 27.5 125m-12-256c-6.834-15.333-25-42.3-43-27.5-22.5 18.5 12 45.5 27.5 93s-24.5-32 15.5-65.5Z"
          stroke="#000"
        />
      </svg> */}
    </section>
  );
};

export default Brand;
