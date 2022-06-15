import React from 'react';
import { Link } from 'react-router-dom';

import img from '../../../assets/images/home/aboutUS.jpg';
import s from './About.module.scss';

const About = () => {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.title}>ABOUT US</h2>
        <div className={s.fotoWrapper}>
          <div className={s.img}>
            <img className={s.aboutImg} src={img} alt="foto" />
          </div>
        </div>

        <div className={s.descrWrapper}>
          <h2 className={s.psevdoTitle}>
            IT`S ABOUT
            <br />
            <span>LOVE</span>
          </h2>
          <div className={s.textBlock}>
            <p className="text">
              These are emotions, who consider a person to adulthood, feelings,
              wings that lift us when it seems tenderness of touch new thoughts
              about familiar things, the highest category of owners, Freedom of
              choice, inserts and desires.
            </p>
            <p className="text">
              These are emotions, who consider a person to adulthood, feelings,
              wings that lift us when it seems tenderness of touch new thoughts
              about familiar things.
            </p>
            <div className={s.linkWrap}>
              <Link className={s.link} to="/about-us">
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
