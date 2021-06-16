import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

import CartContext from '../../store/cart-context';


const HeaderCartButton = ({ onClick }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  // console.log('rerender')
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''} `;

  useEffect(() => {
    if (items.length === 0) {
      return
    }

    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      // console.log('set to false');
      setBtnIsHighlighted(false);
    }, 300)

    return () => {
      // console.log('cleartimer');
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