import styled from 'styled-components';
import { IStyledMainContainer } from './module';

export const StyledContainer = styled.li<IStyledMainContainer>`
  position: relative;
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  padding: 10px;
  width: 100%;
  max-width: 160px;
`;

export const StyledButton = styled.button`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  align-self: center;
  color: ${(props) => props.theme.colors.darkMagenta};
  background: ${(props) => props.theme.colors.blue};
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.black};
  width: 30px;
  height: 30px;
  font-size: 20px;
  font-family: Arial, sans-serif;
  color: ${(props) => props.theme.colors.black};
  padding: 0;
  margin: 0;
  cursor: pointer;
  transition: ${(props) => props.theme.transitions.transitionDuration};

  &:hover {
    transform: scale(1.2);
    background: ${(props) => props.theme.colors.darkBlue};
    border-color: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
  }

  &:active {
    transform: scale(0.9);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
    pointer-events: none;
  }
`;

export const StyledInput = styled.input`
  text-align: center;
  font-family: Arial, sans-serif;
  font-size: 17px;
  width: 60px;
  height: 35px;
  background: transparent;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.black};
  border: 2px solid ${(props) => props.theme.colors.pink};
  outline: none;
  cursor: default;
`;

export const StyledDeleteButton = styled.button`
  position: absolute;
  top: -30px;
  left: 38%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 40px;
  height: 20px;
  margin-top: 1rem;
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.pink};
  border-radius: 30px;
  font-family: Arial, sans-serif;
  font-size: 10px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.pink};
  line-height: 15px;
  outline: none;
  cursor: pointer;
  transition: ${(props) => props.theme.transitions.transitionDuration};

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;
