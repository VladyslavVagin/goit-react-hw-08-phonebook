import styled from 'styled-components';

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 40px 20px;
  justify-content: start;
  width: 100%;
  flex-wrap: wrap;
`;

export const Header = styled.header`
  border-radius: 40px;
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  box-shadow: 5px 5px 10px #b5b5b5, -5px -5px 10px #ffffff;
  padding: 20px 20px 20px 20px;
  margin: 20px auto;
`;

export const WrapperApp = styled.div`
  max-width: 780px;
  margin: 0 auto;
`