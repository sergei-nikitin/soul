import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { SeductionSlide } from '../main/sliderItems/SeductionSlide';
import { TreasureSlide } from '../main/sliderItems/TreasureSlide';
import { TwirlSlide } from '../main/sliderItems/TwirlSlide';

import red from '../../../assets/images/butles/red.png';
import blue from '../../../assets/images/butles/blue.png';
import white from '../../../assets/images/butles/white.png';

import s from './SlickSlider.module.scss';

const SlickSlider = () => {
  const ref = useRef();

  const settings = {
    className: 'slickslide',
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const goToNext = (ref) => {
    ref.current.slickNext();
  };

  const NextBtn = () => {
    return (
      <button type="button" onClick={() => ref.current.slickNext()}>
        next
      </button>
    );
  };

  return (
    <>
      <Slider ref={ref} {...settings}>
        {/* <div> */}
        <SeductionSlide NextBtn={NextBtn} />
        <TreasureSlide />
        <TwirlSlide />
        {/* <img src={red} alt="foto" /> */}
        {/* </div> */}
        {/* <div>
          <SeductionSlide />
          <img src={red} alt="foto" />
        </div>
        <div>
          <TreasureSlide />
          <img src={blue} alt="foto" />
        </div>
        <div>
          <TwirlSlide />
          <img src={white} alt="foto" />
        </div> */}
      </Slider>
    </>
  );
};
export default SlickSlider;
