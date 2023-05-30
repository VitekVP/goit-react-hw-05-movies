import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Loader } from 'components/Loader/Loader';
import { Header, List, Link } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <List>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </List>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
