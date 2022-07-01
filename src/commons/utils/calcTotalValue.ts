import { ICounter } from '../../redux/counters/types';

export const calcTotalValue = (items: ICounter[]) => {
  return items.reduce((acc, item) => acc + item.value, 0);
};
