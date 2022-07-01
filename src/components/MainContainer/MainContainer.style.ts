import styled from 'styled-components';

export const StyledMainContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.h1`
  font-size: 42px;
  line-height: 45px;
  margin: 0;
  padding: 0;
  text-shadow: 1px 1px ${(props) => props.theme.colors.darkMagenta};
`;

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin: 6rem 0 0 0;
  row-gap: 20px;
  padding: 0;
  justify-items: center;

  @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StyledButton = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  width: 80px;
  height: 80px;
  background: ${(props) => props.theme.colors.pink};
  border-radius: 50%;
  font-family: Arial, sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;
  cursor: pointer;
  align-self: center;
  transition: ${(props) => props.theme.transitions.transitionDuration};
  margin: 2rem 0 2rem;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.9);
  }
`;
