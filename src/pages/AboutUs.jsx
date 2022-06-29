import React from 'react';

import { Main } from '../components/pageAboutUs/main';
import { Slider } from '../components/pageAboutUs/slider';
import { History } from '../components/pageAboutUs/history/History';

export const AboutUs = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Main />
      <Slider />
      <History />
    </>
  );
};
