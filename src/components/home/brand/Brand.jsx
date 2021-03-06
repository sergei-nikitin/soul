import React from 'react';
import { motion } from 'framer-motion';

import { LinkTo } from '../../link';
import img from '../../../assets/images/home/brand.png';
import s from './Brand.module.scss';

const Brand = () => {
  const leftAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,

      transition: { delay: custom * 0.2, duration: 0.3 },
    }),
  };

  const toTopAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,

      transition: { delay: custom * 0.2, duration: 0.3 },
    }),
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className={s.section}>
      <div className={s.container}>
        <motion.h2 custom={2} variants={leftAnimation} className={s.titleMob}>
          <span> This brand</span> <br />
          <span>was born in</span> <br />
          <span> great love...</span>
        </motion.h2>
        <motion.h2 custom={2} variants={leftAnimation} className={s.title}>
          This brand was born <br />
          in great love...
        </motion.h2>
        <div className={s.content}>
          <div className={s.descr}>
            <p className="text">
              These are emotions, who consider a person to adulthood, feelings,
              wings that lift us when it seems tenderness of touch new thoughts
              about familiar things, the highest category of owners, Freedom of
              choice, inserts and desires.
            </p>

            <LinkTo path={'/about-us'} />
          </div>
          <motion.div custom={3} variants={toTopAnimation}>
            <img className={s.img} src={img} alt="foto" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Brand;
