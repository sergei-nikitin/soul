import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addItem } from '../../../redux/slices/cartSlice';

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
  return (
    <section className={s.section}>
      <div className={s.bgWrapper}>
        <span>SEDUCTION</span>
        <img className={s.bg} src={bg} alt="bg" />
      </div>

      <div className={s.container}>
        <div className={s.imgWrapper}>
          <img className={s.flak} src={flak} alt="twirl" />
        </div>

        <div className={s.textWtapper}>
          <h3 className={s.title}>seduction - is smells like seduce</h3>
          <p className="text">
            A rich, luxurious fragrance designed for women. Self-confident who
            is not afraid demonstrate luxury <br />
            even on the skin...
          </p>
          <>
            <ButtonAdd onClickAdd={onClickAdd} />
            <Link className={s.link} to="/treasure">
              SEE MORE
            </Link>
          </>
        </div>
      </div>
    </section>
  );
};
export default Seduction;
