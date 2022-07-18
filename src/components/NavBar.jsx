import { Link, Outlet, useLocation } from 'react-router-dom';

export const NavBar = () => {
  const path = useLocation().pathname;
  return (
    <>
      <div className="nav-bar">
        {path !== '/' && (
          <Link className="back-Link" to="/">
            Back to Home
          </Link>
        )}
        <Link to="/">
          <h1>GreenGrocers</h1>
        </Link>
      </div>
      <Outlet />
    </>
  );
};
