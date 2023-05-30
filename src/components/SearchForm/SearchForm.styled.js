import styled from 'styled-components';

export const SForm = styled.form`
  width: 100%;
  max-width: 600px;
  height: 48px;

  display: flex;
  gap: 2px;
  align-items: center;

  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormInput = styled.input`
  padding-left: 4px;
  padding-right: 4px;

  width: 550px;
  height: 42px;

  display: inline-block;

  font: inherit;
  font-size: 18px;

  border: 2px solid grey;
  border-radius: 4px;
  outline: none;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }

  &:focus {
    border: 2px solid green;
    outline: none;
    box-shadow: 0px 0px 10px 1px rgba(44, 221, 118, 0.65);
  }
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;

  border: 0;
  opacity: 0.6;

  transition: opacity 300ms linear;
  cursor: pointer;

  outline: none;

  &:hover {
    opacity: 1;
  }
`;
