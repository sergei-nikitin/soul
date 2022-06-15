import s from './ButtonAdd.module.scss';

const ButtonAdd = ({ onClickAdd }) => {
  return (
    <button onClick={onClickAdd} type="button" className={s.btn}>
      ADD TO CART
    </button>
  );
};

export default ButtonAdd;
