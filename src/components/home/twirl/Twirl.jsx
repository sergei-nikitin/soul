import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../images/bg/BG-TWIRL.png';
import flak from '../../../images/butles/white.png';
import arrow from '../../../images/icons/arrowWhite.svg';
import s from './Twirl.module.scss';

const Twirl = () => {
  return (
    <section className={s.section}>
      <div className={s.imgWrapper}>
        <img className={s.bg} src={bg} alt="bg" />
        <div>
          <img className={s.flak} src={flak} alt="twirl" />
        </div>
      </div>
      <div className={s.descr}>
        <div className={s.textWtapper}>
          <h3>
            twirl - this is how feeling smells ease and unconditional happiness
          </h3>
          <p>
            For girls who want to create the perfect romantic image, for those
            who have something to talk about.
          </p>
          <Link to="/twirl">LEARN MORE</Link>
        </div>
        <button className={s.addBtn} type="button">
          ADD TO CART
          <span className={s.arrowLink}>
            <img src={arrow} alt="icon" />
          </span>
        </button>
      </div>
    </section>
  );
};
export default Twirl;
