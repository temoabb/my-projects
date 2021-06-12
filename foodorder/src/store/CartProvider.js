import CartContext from './cart-context';

const CartProvider = () => {
  return <CartContext.Provider>
    {props.children}
  </CartContext.Provider>
}

export default CartProvider;