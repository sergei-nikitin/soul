import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';

import { addItem } from '../../../redux/slices/cartSlice';

import { LinkTo } from '../../link';
import ButtonAdd from '../../addButton';
import bg from '../../../assets/images/home/seduction-bg.png';
import flak from '../../../assets/images/butles/red.png';
import s from './Seduction.module.scss';

const Seduction = () => {
  const dispatch = useDispatch();
  const onClickAdd = () => {
    const item = {
      id: 2,
      name: 'seduction',
      price: 100,
      imageUrl: flak,
    };
    dispatch(addItem(item));
  };
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
  const rightAnimation = {
    hidden: {
      x: 100,
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
      <motion.div custom={2} variants={leftAnimation} className={s.bgWrapper}>
        <span>SEDUCTION</span>
        <img className={s.bg} src={bg} alt="bg" />
      </motion.div>

      <div className={s.container}>
        <div variants={rightAnimation} className={s.imgWrapper}>
          <motion.img
            custom={3}
            variants={toTopAnimation}
            className={s.flak}
            src={flak}
            alt="twirl"
          />
        </div>

        <motion.div
          custom={2}
          variants={rightAnimation}
          className={s.textWtapper}>
          <h3 className={s.title}>seduction - is smells like seduce</h3>
          <p className="text">
            A rich, luxurious fragrance designed for women. Self-confident who
            is not afraid demonstrate luxury <br />
            even on the skin...
          </p>
          <div className={s.btnswrapper}>
            <ButtonAdd onClickAdd={onClickAdd} />
            <LinkTo path={'/seduction'} name={'see more'} />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
export default Seduction;
