import React from 'react';
import { useSelector } from 'react-redux';

import s from './FormCart.module.scss';

export const FormCart = () => {
  const { totalPrice, items } = useSelector((state) => state.cart);
  return (
    <div className={s.wrapper}>
      <form className={s.cartForm}>
        <h2 className={s.formTitle}>CONTACTS</h2>
        <div className={s.formField}>
          <input name="name" id="name" type="text" placeholder=" " />
          <label htmlFor="name" className={s.label}>
            FIRST NAME
          </label>
        </div>

        <div className={s.formField}>
          <input name="last-name" id="lastName" type="text" placeholder=" " />
          <label htmlFor="lastName" className={s.label}>
            LAST NAME
          </label>
        </div>
        <div className={s.formField}>
          <input name="e-mail" id="email" type="email" placeholder=" " />
          <label htmlFor="email" className={s.label}>
            E-MAIL
          </label>
        </div>
        <div className={s.formField}>
          <input name="phone" id="phone" type="tel" placeholder=" " />
          <label htmlFor="phone" className={s.label}>
            PHONE
          </label>
        </div>
        <div className={s.checkBoxWrapper}>
          <input
            className={s.checkbox}
            type="checkbox"
            id="checkbox"
            name="Privacy Policy"></input>
          <label htmlFor="checkbox" className="text">
            I agree to the Privacy Policy and Terms and Conditions.
          </label>
        </div>
        <h3 className={s.contacts}>ADDRESS</h3>
        <div className={s.formField}>
          <input
            name="COUNTRY/REGION"
            id="COUNTRY/REGION"
            type="text"
            placeholder=" "
          />
          <label htmlFor="COUNTRY/REGION" className={s.label}>
            COUNTRY/REGION
          </label>
        </div>
        <div className={s.formField}>
          <input name="CITY" id="CITY" type="text" placeholder=" " />
          <label htmlFor="CITY" className={s.label}>
            CITY
          </label>
        </div>
        <div className={s.formField}>
          <input name="ZIP COD" id="ZIP COD" placeholder=" " />
          <label htmlFor="ZIP COD" className={s.label}>
            ZIP COD
          </label>
        </div>
        <div className={s.formField}>
          <input name="ADDRESS" id="ADDRESS" type="text" placeholder=" " />
          <label htmlFor="ADDRESS" className={s.label}>
            ADDRESS
          </label>
        </div>
        {/* items */}
        {items.map(({ name, count, price }) => (
          <textarea
            className="visuallyHidden"
            value={[
              'name: ',
              name,
              ' ',
              'count: ',
              count,
              ' ',
              'price: ',
              `${price * count}`,
            ].join(' ')}
          />
        ))}

        <button className={s.submit} type="submit">
          SUBMIT
        </button>
      </form>
      {/* orders */}
      <div className={s.ordersWrapper}>
        <p className={s.ordersTitle}>YOUR ORDERS</p>
        <div className={s.ordersDescr}>
          <span>Product</span>
          <span>Price</span>
        </div>
        {items.map((item) => (
          <div className={s.prod}>
            <img className={s.prodImg} src={item.imageUrl} alt="foto" />
            <p className={s.prodName}>{item.name}</p>
            <p className={s.prodPrice}>$ {item.price}.00</p>
          </div>
        ))}
        <div className={s.totalWrap}>
          <span className={s.total}>Total:</span>
          <span className={s.price}>$ {totalPrice}.00</span>
        </div>
      </div>
    </div>
  );
};
{
}
