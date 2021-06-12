import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = ({ onClose }) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {
        [{
          id: 'c1',
          name: 'Sushi',
          amount: 2,
          price: 12.99
        }].map(item => <li key={item.id}>{item.name}</li>)
      }
    </ul>
  )

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>35</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}


export default Cart;