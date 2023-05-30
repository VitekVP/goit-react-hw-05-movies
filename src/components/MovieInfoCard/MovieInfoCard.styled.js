import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Btn = styled.button`
  width: 120px;
  height: 30px;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 12px;

  box-shadow: 0px 0px 6px 0px #000000bf;
  border: none;
  border-radius: 4px;

  cursor: pointer;

  transition: background-color 300ms linear, color 300ms linear;

  &:hover {
    background-color: #959292;
    color: white;
  }
`;

export const CardContainer = styled.div`
  padding: 15px 10px;
  margin: 20px 0;

  display: flex;
  gap: 20px;

  border-radius: 4px;
  box-shadow: 0px 0px 6px 0px #000000bf;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Subtitle = styled.h3`
  margin-bottom: 20px;

  text-align: center;
  font-size: 24px;
`;

export const List = styled.ul`
  margin-bottom: 20px;

  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const Link = styled(NavLink)`
  padding: 2px 6px;
  font-size: 16px;
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
