import React from 'react';

import { SuccessCart } from '../components/cartElements/SuccessCart';

export const SuccessOrder = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const successStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 60px)',
    height: '100%',
  };
  return (
    <div style={successStyles}>
      <SuccessCart />
    </div>
  );
};
