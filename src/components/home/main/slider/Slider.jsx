import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';

import red from '../../../../images/butles/red.png';
import blue from '../../../../images/butles/blue.png';
import white from '../../../../images/butles/white.png';
import scarf from '../../../../assets/images/icons/red-scarf.svg';
import scarfBlue from '../../../../assets/images/icons/scarfBlue.svg';
import scarfGold from '../../../../assets/images/icons/scarfGold.svg';

import s from './Slider.module.scss';

// const content = [
//   '../../../images/butles/red.png',
//   '../../../images/butles/blue.png',
// ];
// const content = [red, blue, white];
const content = [
  { butle: red, scarf: scarf, num: 0 },
  { butle: blue, scarf: scarfBlue, num: 1 },
  { butle: white, scarf: scarfGold, num: 2 },
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
  const [activeFoto, setActiveFoto] = React.useState(0);

  // const [[imageCount, direction], setImageCount] = React.useState([0, 0]);

  // const activeImageIndex = wrap(0, content.length, imageCount);

  // const swipeToImage = (swipeDirection) => {
  //   setImageCount([imageCount + swipeDirection, swipeDirection]);
  // };

  // const dragEndHandler = (dragInfo) => {
  //   const draggedDistance = dragInfo.offset.x;
  //   const swipeThreshold = 50;
  //   if (draggedDistance > swipeThreshold) {
  //     swipeToImage(-1);
  //   } else if (draggedDistance < -swipeThreshold) {
  //     swipeToImage(1);
  //   }
  // };

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
      {/* <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={imageCount}
          className={s.flakon}
          style={{
            backgroundImage: `url(${content[activeImageIndex].butle})`,
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
        <div className={s.btnsBlock}>
          <button onClick={() => swipeToImage(1)} />
          <button onClick={() => swipeToImage(1)} />
          <button onClick={() => swipeToImage(1)} />
        </div>
      </AnimatePresence> */}

      {content.map((i, index) => (
        <img
          key={index}
          className={activeFoto === index ? s.flakActive : s.flak}
          src={i.butle}
          alt="butle"
        />
      ))}

      <div className={s.btnsBlock}>
        <button
          className={activeFoto === 0 ? s.btnActive : s.btn}
          onClick={() => setActiveFoto(0)}
        />
        <button
          className={activeFoto === 1 ? s.btnActive : s.btn}
          onClick={() => setActiveFoto(1)}
        />
        <button
          className={activeFoto === 2 ? s.btnActive : s.btn}
          onClick={() => setActiveFoto(2)}
        />
      </div>
    </div>
  );
};

export default Slider;
