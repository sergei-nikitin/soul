import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { addItem } from '../redux/slices/cartSlice';
import { addItem, minusItem, removeItem } from '../redux/slices/cartSlice';

import { Main } from '../components/pageSeduction/main/Main';
import { Descr } from '../components/pageSeduction/descr';
import { Notes } from '../components/pageSeduction/notes';
import { AddCart } from '../components/pageSeduction/addCart';
import { Soul } from '../components/home/soul';

import flak from '../assets/images/butles/red.png';

export const Seduction = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  let countItem = 0;
  items.forEach((i) => {
    if (i.id === 2) return (countItem += i.count);
  });

  const onClickAdd = () => {
    const item = {
      id: 2,
      name: 'seduction',
      price: 100,
      imageUrl: flak,
    };
    dispatch(addItem(item));
  };
  const onClickPlus = () => {
    const item = {
      id: 2,
      name: 'seduction',
      price: 100,
      imageUrl: flak,
    };
    dispatch(addItem(item));
  };

  const onClickMinus = () => {
    const item = {
      id: 2,
      name: 'seduction',
      price: 100,
      imageUrl: flak,
    };
    dispatch(minusItem(item.id));
  };

  return (
    <>
      <Main />
      <Descr />
      <Notes />
      <AddCart
        count={countItem}
        onClickAdd={onClickAdd}
        onClickPlus={onClickPlus}
        onClickMinus={onClickMinus}
      />
      <Soul />
    </>
  );
};
