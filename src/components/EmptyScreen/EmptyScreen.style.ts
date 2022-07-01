import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
`;

export const StyledText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 25px;
  line-height: 30px;

  & span {
    display: block;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 120px;
  height: 60px;
  margin-top: 1rem;
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.pink};
  border-radius: 30px;
  font-family: Arial, sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.pink};
  line-height: 15px;
  outline: none;
  cursor: pointer;
  transition: ${(props) => props.theme.transitions.transitionDuration};

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.9);
  }
`;
