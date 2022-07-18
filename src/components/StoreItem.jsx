import { Link } from 'react-router-dom';
import { formatPath } from '../utilities/formatPath';

export const StoreItem = ({ item, setCartItems }) => {
  const addItemToCart = (id) => {
    setCartItems((currentCartItems) => {
      if (currentCartItems.find((item) => item.id === id)) {
        return currentCartItems.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
      } else {
        return [...currentCartItems, { id, quantity: 1 }];
      }
    });
  };

  return (
    <li>
      <Link to={`/${formatPath(item.name)}`} className="store--item-icon">
        <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
      </Link>
      <button onClick={() => addItemToCart(item.id)}>Add to cart</button>
    </li>
  );
};
