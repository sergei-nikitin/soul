import React from 'react';

import { CustomSlider } from '../components/home/customSlider/CustomSlider';
import Main from '../components/home/main';
import SlickSlider from '../components/home/slick/SlickSlider';
import About from '../components/home/about';
import Twirl from '../components/home/twirl';
import Treasure from '../components/home/treasure/Treasure';
import Seduction from '../components/home/seduction/Seduction';
import Brand from '../components/home/brand/Brand';
import Ukraine from '../components/home/ukraine';
import { Soul } from '../components/home/soul';

export const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <CustomSlider />
      {/* <Main />
      <SlickSlider /> */}
      <About />
      <Twirl />
      <Seduction />
      <Treasure />
      <Brand />
      <Ukraine />
      <Soul />
    </>
  );
};
