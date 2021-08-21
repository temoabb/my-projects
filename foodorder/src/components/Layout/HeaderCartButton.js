import React, { useContext, useEffect, useState } from 'react';

import CartContext from '../../store/cart-context';

import CartIcon from '../Cart/CartIcon';

import classes from './HeaderCartButton.module.css';



const HeaderCartButton = ({ onClick }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;
  console.log(btnIsHighlighted);


  const numberOfCartItems = items.reduce((curNumber, item) => curNumber + item.amount, 0);


  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''} `;

  useEffect(() => {
    if (items.length === 0) return;
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300)

    return () => {
      console.log('cleanUp func')
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