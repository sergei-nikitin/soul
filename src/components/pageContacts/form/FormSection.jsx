import React from 'react';
import { motion } from 'framer-motion';

import MapComponent from '../../map/Map';

import img from '../../../assets/images/contacts/autor.png';

import { ReactComponent as Ball } from '../../../assets/images/icons/ball.svg';
import { ReactComponent as InstagramIcon } from '../../../assets/images/icons/Instagram.svg';
import { ReactComponent as TwitterIcon } from '../../../assets/images/icons/twiter.svg';
import { ReactComponent as FacebookIcon } from '../../../assets/images/icons/Facebook.svg';
import s from './FormSection.module.scss';

const FormSection = () => {
  const toTopAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,

      transition: { delay: custom * 0.2, duration: 0.3 },
    }),
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className={s.section}>
      <div className={s.container}>
        <motion.img
          custom={2}
          variants={toTopAnimation}
          className={s.img}
          src={img}
          alt="foto"
        />
        {/* infoWrapperFirst */}
        <div className={s.infoWrapperFirst}>
          <h2 className={s.infoTitle}>more information</h2>
          <p className={s.infoName}>address</p>
          <p className={s.infoDescr}>Kyiv, Independence Avenue 13</p>
          <p className={s.infoName}>amail us</p>
          <a
            href="mailto:soulofmine.perfumes@gmail.com"
            className={s.infoDescr}>
            soulofmine.perfumes@gmail.com
          </a>
          <p className={s.infoName}>coll us</p>
          <a href="tel:+971501871707" className={s.infoDescr}>
            Call: +971501871707
          </a>
          <div className={s.social}>
            <a href="#">
              <Ball className={s.icons} />
            </a>
            <a href="#">
              <InstagramIcon className={s.icons} />
            </a>
            <a href="#">
              <TwitterIcon className={s.icons} />
            </a>
            <a href="#">
              <FacebookIcon className={s.icons} />
            </a>
          </div>
        </div>
        {/* form */}
        <motion.form custom={3} variants={toTopAnimation} className={s.form}>
          <p className={s.formTitle}>send email</p>
          <div className={s.firstInputs}>
            <div className={s.inputWrapperSmal}>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
              />
              <label htmlFor="name" className={s.label}>
                first name
              </label>
            </div>
            <div className={s.inputWrapperSmal}>
              <input
                id="email"
                type="e-mail"
                name="e-mail"
                placeholder="Your e-mail"
              />
              <label htmlFor="email" className={s.label}>
                e-mail
              </label>
            </div>
          </div>
          <div className={s.inputWrapperBig}>
            <input
              id="phone"
              name="phone"
              type="tel"
              className={s.lastInput}
              placeholder="Your phone number"
            />
            <label htmlFor="phone" className={s.label}>
              phone number
            </label>
          </div>
          <div className={s.inputWrapperBig}>
            <input
              id="message"
              name="message"
              type="text"
              className={s.lastInput}
              placeholder="Your message"
            />
            <label htmlFor="message" className={s.label}>
              message
            </label>
          </div>

          <button className={s.submit} type="submit">
            send email
          </button>
        </motion.form>
        {/* more info */}
        <div className={s.infoWrapperSecond}>
          <h2 className={s.infoTitle}>more information</h2>
          <p className={s.infoName}>address</p>
          <p className={s.infoDescr}>Kyiv, Independence Avenue 13</p>
          <p className={s.infoName}>amail us</p>
          <a
            href="mailto:soulofmine.perfumes@gmail.com"
            className={s.infoDescr}>
            soulofmine.perfumes@gmail.com
          </a>
          <p className={s.infoName}>coll us</p>
          <a href="tel:+971501871707" className={s.infoDescr}>
            Call: +971501871707
          </a>
          <div className={s.social}>
            <a href="#">
              <Ball className={s.icons} />
            </a>
            <a href="#">
              <InstagramIcon className={s.icons} />
            </a>
            <a href="#">
              <TwitterIcon className={s.icons} />
            </a>
            <a href="#">
              <FacebookIcon className={s.icons} />
            </a>
          </div>
        </div>
        <div className={s.mapWrapper}>
          <MapComponent />
        </div>
      </div>
    </motion.section>
  );
};

export default FormSection;
