import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICounter, ICountersList } from './types';
import { calcTotalValue } from '../../commons/utils/calcTotalValue';

const initialState: ICountersList = {
  counters: [],
  totalValue: 0,
};

const counterSlice = createSlice({
  name: 'counters',
  initialState: initialState,
  reducers: {
    setCounters: (state, { payload }: PayloadAction<ICounter>) => {
      state.counters.push(payload);
      state.totalValue = calcTotalValue(state.counters);
    },
    increaseCounterValue: (state, { payload }: PayloadAction<ICounter>) => {
      const findItem = state.counters.find((item) => item.id === payload.id);

      if (findItem) {
        findItem.value++;
      }

      state.totalValue = calcTotalValue(state.counters);
    },
    decreaseCounterValue: (state, { payload }: PayloadAction<ICounter>) => {
      const findItem = state.counters.find((item) => item.id === payload.id);

      if (findItem) {
        findItem.value--;
      }

      state.totalValue = calcTotalValue(state.counters);
    },
    removeCounter: (state, { payload }: PayloadAction<number>) => {
      state.counters = state.counters.filter((item) => item.id !== payload);
      state.totalValue = calcTotalValue(state.counters);
    },
    updateCounter: (state, { payload }: PayloadAction<ICounter>) => {
      const findItem = state.counters.find((item) => item.id === payload.id);

      if (findItem) {
        findItem.value = payload.value;
      }

      state.totalValue = calcTotalValue(state.counters);
    },
  },
});

export const {
  setCounters,
  removeCounter,
  increaseCounterValue,
  decreaseCounterValue,
  updateCounter,
} = counterSlice.actions;

export default counterSlice.reducer;
