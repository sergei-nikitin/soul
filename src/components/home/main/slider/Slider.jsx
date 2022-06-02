import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';

import red from '../../../../images/butles/red.png';
import blue from '../../../../images/butles/blue.png';
import white from '../../../../images/butles/white.png';
import scarf from '../../../../images/icons/red-scarf.svg';
import scarfBlue from '../../../../images/icons/scarfBlue.svg';
import scarfGold from '../../../../images/icons/scarfGold.svg';
import grayArrow from '../../../../images/icons/grayArrow.svg';
import s from './Slider.module.scss';

// const content = [
//   '../../../images/butles/red.png',
//   '../../../images/butles/blue.png',
// ];
// const content = [red, blue, white];
const content = [
  { butle: red, scarf: scarf, num: 1 },
  { butle: blue, scarf: scarfBlue, num: 2 },
  { butle: white, scarf: scarfGold, num: 3 },
];

const sliderVariants = {
  incoming: (direction) => ({
    // x: direction > 0 ? '100%' : '-100%',
    scale: 1.1,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction) => ({
    // x: direction > 0 ? '-100%' : '100%',
    scale: 0.95,
    opacity: 0,
  }),
};

const sliderTransition = {
  duration: 0.5,
  // ease: [0.56, 0.03, 0.12, 1.04],
};

const Slider = () => {
  const [[imageCount, direction], setImageCount] = React.useState([0, 0]);

  const activeImageIndex = wrap(0, content.length, imageCount);

  const swipeToImage = (swipeDirection) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (dragInfo) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  // const skipToImage = (imageId) => {
  //   let changeDirection;
  //   if (imageId > activeImageIndex) {
  //     changeDirection = 1;
  //   } else if (imageId < activeImageIndex) {
  //     changeDirection = -1;
  //   }
  //   setImageCount([imageId, changeDirection]);
  // };

  return (
    <div className={s.wrapper}>
      <AnimatePresence initial={false} custom={direction}>
        <div className={s.numbersBlock}>
          <p>0{content[activeImageIndex].num}</p>
          <button onClick={() => swipeToImage(1)}>
            0{content[activeImageIndex].num}
            <img src={grayArrow} alt="icon" />
          </button>
        </div>
        <motion.div
          key={imageCount}
          className={s.flakon}
          style={{
            backgroundImage: `url(${content[activeImageIndex].butle})`,
            // backgroundImage: `url(${content[activeImageIndex].imageSrc})`,
          }}
          custom={direction}
          variants={sliderVariants}
          initial="incoming"
          animate="active"
          exit="exit"
          transition={sliderTransition}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
        />
        <img
          custom={direction}
          variants={sliderVariants}
          initial="incoming"
          animate="active"
          exit="exit"
          transition={sliderTransition}
          // dragElastic={1}
          key={content[activeImageIndex].scarf}
          className={s.scarf}
          src={content[activeImageIndex].scarf}
          alt="foto"
        />
      </AnimatePresence>
      {/* <img className={s.flakon} src={red} alt="foto" /> */}
      {/* <img className={s.scarf} src={scarf} alt="foto" /> */}
      {/* ---------- */}
      {/* <div className="buttons">
        <button onClick={() => swipeToImage(-1)}>PREV</button>
        <button onClick={() => swipeToImage(1)}>NEXT</button>
      </div> */}
    </div>
  );
};

export default Slider;
