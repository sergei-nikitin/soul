import React from 'react';

import f1 from '../../../assets/images/seduction/notes1.png';
import f2 from '../../../assets/images/seduction/notes2.png';
import s from './Notes.module.scss';

export const Notes = () => {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <img className={s.foto1} src={f1} alt="foto" />
        <ul className={s.list}>
          <li className={s.listItem}>
            <p className={s.title}>top notes</p>
            <p className={s.descr}>
              Saffron, pineapple, violet leaves, raspberry, peach
            </p>
          </li>
          <li className={s.listItem}>
            <p className={s.title}>heart notes</p>
          </li>
          <li className={s.listItem}>
            <p className={s.title}>base notes</p>
          </li>
        </ul>
        <img className={s.foto2} src={f2} alt="foto" />
      </div>
    </section>
  );
};
