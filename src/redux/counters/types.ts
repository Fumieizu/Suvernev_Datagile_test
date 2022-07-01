export interface ICounter {
  id: number;
  value: number;
}

export interface ICountersList {
  counters: ICounter[];
  totalValue: number;
}
