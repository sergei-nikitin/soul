import React from 'react';
import { Link } from 'react-router-dom';

import contur from '../../assets/images/Vector.png';
import s from '../../assets/images/logo-letters/s.svg';
import o from '../../assets/images/logo-letters/o.svg';
import u from '../../assets/images/logo-letters/u.svg';
import l from '../../assets/images/logo-letters/l.svg';
import f from '../../assets/images/logo-letters/f.svg';
import m from '../../assets/images/logo-letters/m.svg';
import i from '../../assets/images/logo-letters/i.svg';
import n from '../../assets/images/logo-letters/n.svg';
import e from '../../assets/images/logo-letters/e.svg';

import st from './LogoFooter.module.scss';

export const LogoFooter = () => {
  return (
    <>
      <Link className={st.logoWrapper} to="/">
        <div className={st.logo}>
          <img className={st.contur} src={contur} alt="logo" />
          <img className={st.letter} src={s} alt="logo" />
        </div>
        <div className={st.textWrapper}>
          <img className={st.letterSVG} src={s} alt="l" />
          <img className={st.letterSVG} src={o} alt="l" />
          <img className={st.letterSVG} src={u} alt="l" />
          <img className={st.letterSVG} src={l} alt="l" />
          <span></span>
          <img className={st.letterSVG} src={o} alt="l" />
          <img className={st.letterSVG} src={f} alt="l" />
          <span></span>
          <img className={st.letterSVG} src={m} alt="l" />
          <img className={st.letterSVGi} src={i} alt="l" />
          <img className={st.letterSVG} src={n} alt="l" />
          <img className={st.letterSVG} src={e} alt="l" />
        </div>
      </Link>
    </>
  );
};
