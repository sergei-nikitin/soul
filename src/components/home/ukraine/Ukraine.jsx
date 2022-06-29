import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';

import { addItem } from '../../../redux/slices/cartSlice';

import img from '../../../assets/images/home/soul-of-ukraine.png';
import { ReactComponent as Icon } from '../../../assets/images/icons/cart.svg';
// import bg from '../../../assets/images/home/ukraine-bg.png';
import btl from '../../../assets/images/home/ukraine-btl.png';
// import svg from '../../../assets/images/home/ukraine-svg.svg';

import s from './Ukraine.module.scss';

const Ukraine = () => {
  const dispatch = useDispatch();
  const [activeSize, setActiveSize] = React.useState(0);
  const sizes = [50, 75, 100];
  const onClickAdd = () => {
    const item = {
      id: 4,
      name: 'soul of ukraine',
      price: 100,
      imageUrl: btl,
      size: sizes[activeSize],
    };
    dispatch(addItem(item));
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
      <motion.div custom={2} variants={toTopAnimation} className={s.container}>
        <p className={s.title}>Soul of Ukraine</p>
        <img className={s.img} src={img} alt="foto" />
        <div className={s.desrc}>
          <p className={s.text}>
            The perfumers who were working on our amazing fragrance SOUL
            OF UKRAINE. The best noses of the world for the most unique perfume!
            This project is fully dedicated to support Ukrainian kids who
            suffered during the war in Ukraine.
          </p>
          <p className={s.text}>
            My appreciation to Symrise for their support and attention
            to my project! My appreciation to Леся Верба for her amazing and
            unique painting in our box for the fragrance.
          </p>
          <p className={s.text}>
            All income will be transferred to the Charity undation The Child
            of Unified Ukraine The limited edition of the very unique and
            authentic fragrance dedicated to Ukraine
          </p>
          <div onClick={onClickAdd} className={s.wrapper}>
            <button type="button" className={s.btn}>
              ADD TO CART
            </button>
            <Icon className={s.icon} />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};
export default Ukraine;
