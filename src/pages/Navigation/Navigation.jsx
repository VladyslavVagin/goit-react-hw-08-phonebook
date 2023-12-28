import { NavLink, Outlet } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { NavList, Header, WrapperApp } from './Navigation.styled';
import { Suspense } from 'react';
import styled from 'styled-components';
import UserMenu from '../../components/UserMenu/UserMenu';
import { useAuth } from '../../hooks/useAuth';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  border-radius: 24px;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow: 9px 9px 13px #8b8b8b, -9px -9px 13px #ffffff;
  padding: 8px 24px;
  text-transform: uppercase;
  font-weight: 700;
  color: #494949;
  transition: all 400ms ease;
  &:hover {
    color: #ffffff;
  };
  &.active {
    color: #ffffff;
  }

`;

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <WrapperApp>
      <Header>
        <nav>
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <NavList>
              <li>
                <StyledLink to={'/signup'}>Register</StyledLink>
              </li>
              <li>
                <StyledLink to={'/login'}>Login</StyledLink>
              </li>
            </NavList>
          )}
        </nav>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </WrapperApp>
  );
};

export default Navigation;
