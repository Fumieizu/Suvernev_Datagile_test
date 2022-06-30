import { RootState } from '../store';

export const getCountersList = (state: RootState) => state.countersReducer.counters;
