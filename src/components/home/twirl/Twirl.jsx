import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addItem } from '../../../redux/slices/cartSlice';

import ButtonAdd from '../../addButton';
import bg from '../../../assets/images/home/twirl-bg.png';
import flak from '../../../assets/images/butles/white.png';
import s from './Twirl.module.scss';

const Twirl = () => {
  const dispatch = useDispatch();

  const onClickAdd = () => {
    const item = {
      id: 1,
      name: 'twirl',
      price: 100,
      imageUrl: flak,
    };
    dispatch(addItem(item));
  };

  return (
    <section className={s.section}>
      <div className={s.bgWrapper}>
        <span>TWIRL</span>
        <img className={s.bg} src={bg} alt="bg" />
      </div>

      <div className={s.container}>
        <div className={s.textWtapper}>
          <h3 className={s.title}>
            twirl - this is how feeling smells ease and unconditional happiness
          </h3>
          <p className="text">
            For girls who want to create the perfect romantic image, for those
            who have something to talk about...
          </p>
          <div className={s.btnswrapper}>
            <ButtonAdd onClickAdd={onClickAdd} />
            <Link className={s.link} to="/twirl">
              SEE MORE
            </Link>
          </div>
        </div>

        <div className={s.imgWrapper}>
          <img className={s.flak} src={flak} alt="twirl" />
        </div>
      </div>
    </section>
  );
};
export default Twirl;
