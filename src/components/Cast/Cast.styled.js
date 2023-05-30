import styled from 'styled-components';

export const CastList = styled.ul`
  margin-bottom: 20px;

  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const CastListItem = styled.li`
  flex-basis: calc((100% - 80px) / 6);

  display: flex;
  flex-direction: column;

  box-shadow: 0px 0px 4px 1px #2e2e2ebf;

  transition: transform 300ms linear;
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
  }
`;

export const CastFoto = styled.img`
  height: 248px;
`;

export const CastInfo = styled.div`
  padding: 10px 2px 10px;

  background-color: white;
`;

export const Name = styled.p`
  margin-bottom: 8px;

  text-align: center;
  font-weight: 700;
`;

export const Character = styled.p`
  font-size: 14px;
`;
