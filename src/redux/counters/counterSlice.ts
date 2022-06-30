import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICountersList } from './types';

const initialState: ICountersList = {
  counters: [],
};

const counterSlice = createSlice({
  name: 'counters',
  initialState: initialState,
  reducers: {
    setCountersList: (state, { payload }: PayloadAction<any>) => {
      state.counters = payload;
    },
  },
});

export default counterSlice.reducer;
