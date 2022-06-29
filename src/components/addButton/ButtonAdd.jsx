import s from './ButtonAdd.module.scss';
import img from '../../assets/images/icons/cart.svg';
import { ReactComponent as Icon } from '../../assets/images/icons/cart.svg';

const ButtonAdd = ({ onClickAdd }) => {
  return (
    <div onClick={onClickAdd} className={s.wrapper}>
      <button type="button" className={s.btn}>
        ADD TO CART
      </button>
      <Icon className={s.icon} />
    </div>
  );
};

export default ButtonAdd;
