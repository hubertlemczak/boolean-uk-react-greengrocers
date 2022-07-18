import './styles/reset.css';
import './styles/index.css';

import { Routes, Route, useLocation } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { MoreInfo } from './pages/MoreInfo';

export default function App() {
  const currentWindow = useLocation().pathname;
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path={currentWindow} element={<MoreInfo />} />
      </Routes>
    </>
  );
}
