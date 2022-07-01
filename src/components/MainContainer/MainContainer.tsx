import React, { useCallback } from 'react';
import Counter from '../Counter';
import { StyledButton, StyledList, StyledMainContainer, StyledTitle } from './MainContainer.style';
import { EmptyScreen } from '../EmptyScreen';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setCounters } from '../../redux/counters/counterSlice';
import { getCounters, getTotalValue } from '../../redux/counters/selectors';
import { getIdByLastElement } from '../../commons/utils/getIdByLastElement';

export const MainContainer: React.FC = () => {
  const counters = useAppSelector(getCounters);
  const totalValue = useAppSelector(getTotalValue);
  const dispatch = useAppDispatch();

  const handleButtonClick = useCallback(() => {
    dispatch(
      setCounters({
        id: getIdByLastElement(counters),
        value: totalValue,
      }),
    );
  }, [counters, dispatch, totalValue]);

  return (
    <StyledMainContainer>
      <StyledTitle>React-Redux CounterList</StyledTitle>
      {counters.length === 0 ? (
        <EmptyScreen />
      ) : (
        <>
          <StyledList>
            {counters.map(({ id, value }) => (
              <Counter key={id} id={id} value={value} isTimer={id % 4 === 0} /> //isTimer can also matter: (index + 1) % 4 === 0
            ))}
          </StyledList>
          <StyledButton onClick={handleButtonClick}>+</StyledButton>
        </>
      )}
    </StyledMainContainer>
  );
};
