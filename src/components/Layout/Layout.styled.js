import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  height: 80px;
  margin-bottom: 40px;
  padding: 0 20px;

  border: 1px solid black;
  border-radius: 4px;

  display: flex;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  gap: 30px;
`;

export const Link = styled(NavLink)`
  padding: 2px 6px;
  font-size: 20px;
  font-weight: 700;
  color: black;
  text-decoration: none;

  border-radius: 4px;
  cursor: pointer;
  transition: background-color 300ms linear, color 300ms linear;

  &.active {
    color: white;
    background-color: grey;
  }
`;
