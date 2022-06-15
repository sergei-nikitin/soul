import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addItem } from '../../../redux/slices/cartSlice';

import ButtonAdd from '../../addButton';
import bg from '../../../assets/images/home/treasure-bg.png';
import flak from '../../../assets/images/butles/red.png';
import s from '../twirl/Twirl.module.scss';

const Treasure = () => {
  const dispatch = useDispatch();
  const [activeSize, setActiveSize] = React.useState(0);
  const sizes = [50, 75, 100];
  const onClickAdd = () => {
    const item = {
      id: 3,
      name: 'treasure',
      price: 100,
      imageUrl: flak,
      size: sizes[activeSize],
    };
    dispatch(addItem(item));
  };
  return (
    <section className={s.section}>
      <div className={s.bgWrapper}>
        <span>TREASURE</span>
        <img className={s.bg} src={bg} alt="bg" />
      </div>

      <div className={s.container}>
        <div className={s.textWtapper}>
          <h3 className={s.title}>treasure - male energy</h3>
          <p className="text">
            A fragrance for men, sophisticated and a little overbearing.
            <br />
            Seductive masculinity...
          </p>
          <div className={s.btnswrapper}>
            <ButtonAdd onClickAdd={onClickAdd} />
            <Link className={s.link} to="/treasure">
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
export default Treasure;
