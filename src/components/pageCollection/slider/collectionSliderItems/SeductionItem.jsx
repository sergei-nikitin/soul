import React from 'react';

// import { SeductionMini } from '../miniProducts/SeductionMini';
import { TreasureMini } from '../../miniProducts/TreasureMini';
import { TwirlMini } from '../../miniProducts/TwirlMini';
import ButtonAdd from '../../../addButton';
import { LinkTo } from '../../../link';
import butle from '../../../../assets/images/butles/red.png';
import s from './sliderItems.module.scss';

export const SeductionItem = ({ NextBtn }) => {
  return (
    <div className={s.container}>
      <div className={s.slideNum}>
        <span className={s.mainNum}>01</span>
        <span className={s.totalNum}>/ 03</span>
      </div>
      <div className={s.imgContainer}>
        <div className={s.containerForCanvas}>
          {/* containerForCanvas: контейнер для анимации/ position:absolute w:100% h:100% */}
        </div>
        <img className={s.img} src={butle} alt="img" />

        <div className={s.navPoints}>
          <span className={s.pointActive}></span>
          <span className={s.point}></span>
          <span className={s.point}></span>
          <NextBtn />
        </div>
      </div>
      <div className={s.textWrapper}>
        <div className={s.infocontainer}>
          <p className={s.nameProduct}>seduction</p>
          <p className={s.priceProduct}>＄ 100.00</p>
          <p className={s.textProduct}>
            seduction - is smells like seduce is smells like seduce
          </p>
          <p className="text">
            These are emotions, who consider a person to adulthood, feelings,
            wings that lift us when it seems tenderness of touch new thoughts
            about familiar things.
          </p>
        </div>

        <div className={s.btnsWrapper}>
          <LinkTo path={'/seduction'} />
          <ButtonAdd />
        </div>

        <div className={s.miniProducts}>
          <TreasureMini />
          <TwirlMini />
        </div>

        {/* {num === '02' && (
          <div className={s.miniProducts}>
            <SeductionMini />
            <TwirlMini />
          </div>
        )}
        {num === '03' && (
          <div className={s.miniProducts}>
            <SeductionMini />
            <TreasureMini />
          </div>
        )} */}
      </div>
    </div>
  );
};

// export const SliderItem = ({
//   num,
//   img,
//   name,
//   price,
//   descr,
//   text,
//   linkPath,
//   PrevBtn,
//   NextBtn,
// }) => {
//   return (
//     <div className={s.container}>
//       <div className={s.slideNum}>
//         <span className={s.mainNum}>{num}</span>
//         <span className={s.totalNum}>/ 03</span>
//       </div>
//       <div className={s.imgContainer}>
//         <div className={s.containerForCanvas}>
//           {/* containerForCanvas: контейнер для анимации/ position:absolute w:100% h:100% */}
//         </div>
//         <img className={s.img} src={img} alt="img" />

//           <div className={s.navPoints}>
//             <span className={s.pointActive}></span>
//             <span className={s.point}></span>
//             <span className={s.point}></span>
//             <NextBtn />
//           </div>

//       </div>
//       <div className={s.textWrapper}>
//         <div className={s.infocontainer}>
//           <p className={s.nameProduct}>{name}</p>
//           <p className={s.priceProduct}>＄ {price}.00</p>
//           <p className={s.textProduct}>{text}</p>
//           <p className="text">{descr}</p>
//         </div>

//         <div className={s.btnsWrapper}>
//           <LinkTo path={linkPath} />
//           <ButtonAdd />
//         </div>

//         {num === '01' && (
//           <div className={s.miniProducts}>
//             <TreasureMini />
//             <TwirlMini />
//           </div>
//         )}
//         {num === '02' && (
//           <div className={s.miniProducts}>
//             <SeductionMini />
//             <TwirlMini />
//           </div>
//         )}
//         {num === '03' && (
//           <div className={s.miniProducts}>
//             <SeductionMini />
//             <TreasureMini />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
