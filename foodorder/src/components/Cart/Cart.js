import React, { useState, useContext } from 'react';
import CartContext from '../../store/cart-context';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import Checkout from './Checkout';


import classes from './Cart.module.css';
const URL = 'https://meals-661d7-default-rtdb.europe-west1.firebasedatabase.app/orders.json';

const Cart = ({ onClose }) => {
  const cartCtx = useContext(CartContext);

  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);


  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 })
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);

    await fetch(URL, {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };




  const cartItems = (
    <ul className={classes['cart-items']}>
      {
        cartCtx.items.map(item => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        ))
      }
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={onClose}>Close</button>
      {hasItems && <button onClick={orderHandler} className={classes.button}>Order</button>}
    </div>
  );


  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={onClose}>Close</button>
      </div>
    </React.Fragment>
  )

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={onClose} />}
      {!isCheckout && modalActions}
    </React.Fragment>
  );

  return (
    <Modal onClose={onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  )
};


export default Cart;