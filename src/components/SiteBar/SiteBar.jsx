import { NavLink, Outlet } from 'react-router-dom';
import css from './SiteBar.module.css';
import { Suspense } from 'react';

const SiteBar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SiteBar;
