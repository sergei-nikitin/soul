import React from 'react';

import { SliderCollection } from '../components/pageCollection/slider';

export const Collection = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SliderCollection />
    </>
  );
};
