import React from 'react';
import { Link } from 'react-router-dom';

import s from './About.module.scss';

const About = () => {
  return (
    <div className={s.section}>
      <div className={s.container}>
        <h2>
          IT`S ABOUT
          <br />
          LOVE.
        </h2>
        <div className={s.descrWrapper}>
          <h3>ABOUT US</h3>
          <div className={s.textBlock}>
            <p>
              These are emotions, who consider a person to adulthood, feelings,
              wings that lift us when it seems tenderness of touch new thoughts
              about familiar things, the highest category of owners, Freedom of
              choice, inserts and desires.
            </p>
            <p>
              These are emotions, who consider a person to adulthood, feelings,
              wings that lift us when it seems tenderness of touch new thoughts
              about familiar things.
            </p>
          </div>
          <Link to="/about-us">LEARN MORE</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
