import React from 'react';

import CircleLink from '../circleLink';

import red from '../../images/butles/red.png';
import scarf from '../../images/icons/red-scarf.svg';
import grayArrow from '../../images/icons/grayArrow.svg';
import s from './MainSlider.module.scss';

const MainSlider = () => {
  return (
    <section className={s.sction}>
      <img className={s.scarf} src={scarf} alt="foto" />
      <div className={s.wrapper}>
        <div className={s.textWrapper}>
          <h1 className={s.title}>
            soul
            <br />
            of
            <br />
            mine
          </h1>
          <p className={s.text}>
            Translated as my soul, the accepted manifestation tenderness and
            appeal to a loved one.
          </p>
          <CircleLink path={'/twirl'} name={'twirl'} />
        </div>
        <div className={s.imageWrapper}>
          <p className={s.number}>
            01
            <button className={s.btn}>
              /01
              <img src={grayArrow} alt="arrow" />
            </button>
          </p>

          <img className={s.img} src={red} alt="foto" />
        </div>
      </div>
    </section>
  );
};

export default MainSlider;
