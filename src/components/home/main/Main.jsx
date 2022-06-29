import React from 'react';

import LinkTo from '../../link';
// import Slider from './slider';
import s from './Main.module.scss';
import flak from '../../../assets/images/butles/red.png';
import ModelViewer from "../../plume/ModelViewer";
import modelPath1 from "../../plume/gltf/clothblend.glb";
import clothblend_botl from "../../plume/gltf/clothblend_botl.glb";
import clothblend1 from "../../plume/gltf/clothblend1.glb";
import Plume1 from "../../plume/Plume1";

const Main = () => {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.textWrapper}>
          <h1 className={s.title}>
            <span className={s.soul}>SOUL</span> <br/>
            <span className={s.ofMine}>OF MINE</span>
          </h1>
          <img className={s.img} src={flak} alt="flak"/>
          <p className="text">
            Translated as my soul, the accepted manifestation tenderness and
            appeal to a loved one.
          </p>
          <LinkTo path={'/collection'} name={'learn more'}/>
        </div>
        <div className={s.imgWrapper}>
          <img className={s.imgBig} src={flak} alt="flak"/>
          <div className={s.btns}>
            <button type="button" className={s.sliderBtnActive}/>
            <button type="button"/>
            <button type="button"/>
          </div>
        </div>
        {/* <Slider /> */}
      </div>
      <div className={s.scarf}>
        {/*<Plume1/>*/}
        <ModelViewer scale="10" modelPath={clothblend1} position={[1, 1, 1]} />
      < /div>
    </section>
);
};

export default Main;
