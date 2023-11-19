import { Outlet } from 'react-router-dom';
import { StyledLink, List, Header } from './Layout.styled';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <Header>
        <List>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </List>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
