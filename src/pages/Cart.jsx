import React from 'react';

// import Cart from '../../components/cart';
import { FirstCart } from '../components/cartElements/FirstCart';
// import { EmptyCart } from '../components/cartElements/EmptyCart';
// import { FormCart } from '../components/cartElements/FormCart';
// import { SuccessCart } from '../components/cartElements/SuccessCart';

export const CartPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="cartWrapper">
      <FirstCart />
      {/* <EmptyCart /> */}
      {/* <FormCart /> */}
      {/* <SuccessCart /> */}
    </div>
  );
};
