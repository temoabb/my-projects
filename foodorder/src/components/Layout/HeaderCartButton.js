import React, { useContext, useEffect, useState } from 'react';

import CartContext from '../../store/cart-context';

import CartIcon from '../Cart/CartIcon';

import classes from './HeaderCartButton.module.css';



const HeaderCartButton = ({ onClick }) => {
  // console.log('HeaderCartButton (bump) is running!');
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;
  // console.log("file: HeaderCartButton.js ~ line 16 ~ items", items);


  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0);

  // console.log("file: HeaderCartButton.js ~ line 23 ~ numberOfCartItems ~ numberOfCartItems", numberOfCartItems)

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''} `;

  useEffect(() => {
    // console.log('bump effect');
    if (items.length === 0) return;

    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])


  return (
    <button onClick={onClick} className={btnClasses}>
      <span className={classes.icon}><CartIcon /></span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}


export default HeaderCartButton;