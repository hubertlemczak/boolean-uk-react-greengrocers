import { CartItem } from './CartItem';
import storeItems from '../data/store-items.json';

export const Cart = ({ cartItems, setCartItems }) => {
  const getTotal = () =>
    cartItems
      .reduce((acc, cartItem) => {
        const item = storeItems.find((i) => i.id === cartItem.id);
        return acc + cartItem.quantity * item.price;
      }, 0)
      .toFixed(2);

  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} setCartItems={setCartItems} />
          ))}
        </ul>
      </div>
      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>
        <div>
          <span className="total-number">£{getTotal()}</span>
        </div>
      </div>
    </main>
  );
};
