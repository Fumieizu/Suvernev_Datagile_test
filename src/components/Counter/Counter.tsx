import React, { useState, useEffect, useCallback } from 'react';
import { ICounter } from './module';
import { StyledButton, StyledContainer, StyledDeleteButton, StyledInput } from './Counter.style';
import {
  removeCounter,
  increaseCounterValue,
  decreaseCounterValue,
  updateCounter,
} from '../../redux/counters/counterSlice';
import { useAppDispatch } from '../../redux/hooks';

export const Counter: React.FC<ICounter> = ({ isTimer = false, id, value }) => {
  const dispatch = useAppDispatch();

  const [time, setTime] = useState<number>(value);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleDecreaseClick = useCallback(() => {
    dispatch(
      decreaseCounterValue({
        id: id,
        value: 0,
      }),
    );
  }, [id, dispatch]);

  const handleIncreaseClick = useCallback(() => {
    dispatch(
      increaseCounterValue({
        id: id,
        value: 0,
      }),
    );
  }, [dispatch, id]);

  const handleOnOver = () => {
    setIsVisible((prev) => !prev);
  };

  const handleDeleteButtonClick = () => {
    dispatch(removeCounter(id));
  };

  useEffect(() => {
    if (isTimer) {
      const timer = setInterval(() => {
        setTime(time + 1);
      }, 1000);

      dispatch(
        updateCounter({
          id: id,
          value: time,
        }),
      );

      return () => clearInterval(timer);
    }
  }, [time, isTimer, dispatch, id]);

  return (
    <StyledContainer
      justifyContent={isTimer ? 'center' : 'space-between'}
      onMouseEnter={handleOnOver}
      onMouseLeave={handleOnOver}
    >
      {isVisible && <StyledDeleteButton onClick={handleDeleteButtonClick}>Del</StyledDeleteButton>}
      {isTimer ? (
        <StyledInput type="text" readOnly value={time} />
      ) : (
        <>
          <StyledButton disabled={value === 0} onClick={handleDecreaseClick}>
            -
          </StyledButton>
          <StyledInput type="text" readOnly value={value} />
          <StyledButton onClick={handleIncreaseClick}>+</StyledButton>
        </>
      )}
    </StyledContainer>
  );
};
