import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const List = styled.ul`
  margin: 20px 0;
`;

export const Item = styled.li`
  padding: 2px;

  box-shadow: 0px 0px 3px 0px #000000bf;
  border-radius: 4px;

  transition: transform 300ms linear;

  &:not(:last-child) {
    margin-bottom: 6px;
  }

  &:hover {
    transform: scale(1.02);
  }
`;

export const Wrap = styled.div`
  /* width: 60px;
  height: 80px;

  object-fit: contain; */
`;

export const A = styled(Link)`
  display: flex;
  gap: 20px;
  align-items: center;

  font-size: 18px;
  font-weight: 500;
  color: inherit;
  text-decoration: none;
`;
