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
  background: #e0e0e0;
  box-shadow: 5px 5px 10px #b5b5b5, -5px -5px 10px #ffffff;
  padding: 20px 20px 20px 20px;
  margin: 20px auto;
`;

export const WrapperApp = styled.div`
  max-width: 780px;
  margin: 0 auto;
`