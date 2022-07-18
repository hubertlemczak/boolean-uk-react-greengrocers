import { useLocalStorage } from '../hooks/useLocalStorage';
import { Store } from '../components/Store';
import { Cart } from '../components/Cart';

export const Home = () => {
  const [cartItems, setCartItems] = useLocalStorage('cartItems', []);
  return (
    <>
      <Store setCartItems={setCartItems} />
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
    </>
  );
};
