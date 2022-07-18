import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useLocalStorage } from './hooks/useLocalStorage';

import './styles/reset.css';
import './styles/index.css';

import initialStoreItems from './store-items';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { MoreInfo } from './pages/MoreInfo';

export default function App() {
  const [storeItems] = useState(initialStoreItems);
  const [cartItems, setCartItems] = useLocalStorage('cartItems', []);
  const [path, setPath] = useLocalStorage('path', '');

  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route
          index
          element={
            <Home
              storeItems={storeItems}
              cartItems={cartItems}
              setCartItems={setCartItems}
              setPath={setPath}
            />
          }
        />
        <Route path={`/${path}`} element={<MoreInfo />} />
      </Route>
    </Routes>
  );
}
