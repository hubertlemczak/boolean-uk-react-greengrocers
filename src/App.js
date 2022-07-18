import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './styles/reset.css';
import './styles/index.css';

import initialStoreItems from './store-items';
import { Store } from './components/Store';
import { Cart } from './components/Cart';

export default function App() {
  const [storeItems] = useState(initialStoreItems);
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  return (
    <Routes>
      <Store storeItems={storeItems} setCartItems={setCartItems} />
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
    </Routes>
  );
}
