import { Store } from '../components/Store';
import { Cart } from '../components/Cart';

export const Home = ({
  storeItems,
  cartItems,
  setCartItems,
  setInfoItem,
  setPath,
}) => (
  <>
    <Store
      storeItems={storeItems}
      setCartItems={setCartItems}
      setPath={setPath}
      setInfoItem={setInfoItem}
    />
    <Cart cartItems={cartItems} setCartItems={setCartItems} />
  </>
);
