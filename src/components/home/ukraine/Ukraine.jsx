import React from 'react';
import { useDispatch } from 'react-redux';

import { addItem } from '../../../redux/slices/cartSlice';

import bg from '../../../assets/images/home/ukraine-bg.png';
import btl from '../../../assets/images/home/ukraine-btl.png';
import svg from '../../../assets/images/home/ukraine-svg.svg';

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
  return (
    <section className={s.section}>
      <img className={s.imgBg} src={bg} alt="foto" />
      <img className={s.svg} src={svg} alt="foto" />
      <div className={s.container}>
        <div className={s.upper}>
          <p className="text">
            The perfumers who were working on our amazing fragrance SOUL
            OF UKRAINE. The best noses of the world for the most unique perfume!
            This project is fully dedicated to support Ukrainian kids who
            suffered during the war in Ukraine.
          </p>
          <p className="text">
            My appreciation to Symrise for their support and attention
            to my project! My appreciation to Леся Верба for her amazing and
            unique painting in our box for the fragrance.
          </p>
        </div>
        <img className={s.btl} src={btl} alt="btl" />
        <div className={s.lower}>
          <p className="text">
            All income will be transferred to the Charity undation The Child
            of Unified Ukraine The limited edition of the very unique and
            authentic fragrance dedicated to Ukraine
          </p>
          <div className={s.btnWrapper}>
            <button onClick={onClickAdd} type="button" className={s.btn}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Ukraine;
