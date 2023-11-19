import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: white;
  border-bottom: 1px solid transparent;
  box-shadow: 0 1px 6px 1px rgba(224, 177, 122, 0.9);
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
`;

export const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  list-style: none;
`;

export const StyledLink = styled(NavLink)`
  color: #212121;
  text-decoration: none;

  &.active {
    color: #ff3028;
  }

  &:hover,
  :focus {
    text-decoration: underline;
  }
`;
