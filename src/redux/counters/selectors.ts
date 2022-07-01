import { RootState } from '../store';

export const getCounters = (state: RootState) => state.countersReducer.counters;

export const getTotalValue = (state: RootState) => state.countersReducer.totalValue;
