import React from 'react';

import { SliderCollection } from '../components/pageCollection/slider';
import { CollectionCustomSlider } from '../components/pageCollection/customSliderCollection/CollectionCustomSlider';

export const Collection = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <CollectionCustomSlider />
      {/* <SliderCollection /> */}
    </>
  );
};
