import storeItems from '../data/store-items';
import { capitaliseFirstLetter } from '../utilities/capitaliseFirstLetter';

export const CartItem = ({ id, quantity, setCartItems }) => {
  const item = storeItems.find((item) => item.id === id);

  const incrementQuantity = (id) =>
    setCartItems((currentCartItems) =>
      currentCartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

  const decrementQuantity = (id) =>
    setCartItems((currentCartItems) =>
      currentCartItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity !== 0)
    );

  return (
    <li>
      <img
        className="cart--item-icon"
        src={`assets/icons/${item.id}.svg`}
        alt={item.name}
      />
      <p>{capitaliseFirstLetter(item.name)}</p>
      <button
        className="quantity-btn remove-btn center"
        onClick={() => decrementQuantity(id)}
      >
        -
      </button>
      <span className="quantity-text center">{quantity}</span>
      <button
        className="quantity-btn add-btn center"
        onClick={() => incrementQuantity(id)}
      >
        +
      </button>
    </li>
  );
};
