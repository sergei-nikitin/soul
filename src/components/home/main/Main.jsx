import React from 'react';

import CircleLink from '../../circleLink';
import Slider from './slider';

import shane from '../../../images/Shine.png';
import s from './Main.module.scss';

const Main = () => {
  return (
    <section className={s.sction}>
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
        <Slider />
        {/* <img className={s.shane} src={shane} alt="shane" /> */}
      </div>
      <img className={s.shane} src={shane} alt="shane" />
    </section>
  );
};

export default Main;
