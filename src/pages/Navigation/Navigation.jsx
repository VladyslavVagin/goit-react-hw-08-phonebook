import { NavLink, Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HelmetSeo from '../../components/HelmetSeo/HelmetSeo';
import { NavList, Header, WrapperApp } from './Navigation.styled';
import { Suspense } from 'react';
import styled from 'styled-components';
import UserMenu from '../../components/UserMenu/UserMenu';
import { useAuth } from '../../hooks/useAuth';
import logoImage from '../../icons/notepad-117597.svg';
import ImageDefault from 'components/ImageDefault/ImageDefault';
import LoaderGeneral from 'components/LoaderGeneral/LoaderGeneral';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  border-radius: 24px;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow: 9px 9px 13px #8b8b8b;
  padding: 8px 24px;
  text-transform: uppercase;
  font-weight: 700;
  color: #494949;
  transition: all 400ms ease;
  &:hover {
    color: #ff9100;
  }
  &.active {
    color: #ff9100;
  }
`;

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HelmetProvider>
      <HelmetSeo />
      <WrapperApp>
        <Header>
          <nav>
            {isLoggedIn ? (
              <UserMenu />
            ) : (
              <>
                <NavList>
                  <li>
                    <h1>
                      Phonebook
                      <img
                        src={logoImage}
                        alt="Icon with notebook"
                        className="logo"
                      />
                    </h1>
                  </li>
                  <li>
                    <StyledLink
                      to={'/signup'}
                      aria-label="Link for open registry form"
                    >
                      Register
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink
                      to={'/login'}
                      aria-label="Link for open login form"
                    >
                      Login
                    </StyledLink>
                  </li>
                </NavList>
              </>
            )}
          </nav>
        </Header>
        <main>
          <ImageDefault/>
          <Suspense fallback={<LoaderGeneral />}>
            <Outlet />
          </Suspense>
        </main>
      </WrapperApp>
    </HelmetProvider>
  );
};

export default Navigation;
