import styled from 'styled-components';

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 40px 20px;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
  padding-left: 0;
`;

export const Header = styled.header`
  border-radius: 40px;
  background-color: #fbab7e;
  background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
  box-shadow: 5px 5px 10px #b5b5b5, -5px -5px 10px #ffffff;
  padding: 20px 20px 20px 20px;
  margin: 20px auto;
`;

export const WrapperApp = styled.div`
  max-width: 780px;
  margin: 0 auto;
`;
