import React from 'react';
import { StyledButton, StyledContainer, StyledText } from './EmptyScreen.style';
import { useAppDispatch } from '../../redux/hooks';
import { setCounters } from '../../redux/counters/counterSlice';

export const EmptyScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleAddButton = () => {
    dispatch(
      setCounters({
        id: 1,
        value: 0,
      }),
    );
  };

  return (
    <StyledContainer>
      <StyledText>
        There is no counter 😓. Click the button to add
        <span>👇</span>
      </StyledText>
      <StyledButton onClick={handleAddButton}>add new counter</StyledButton>
    </StyledContainer>
  );
};
