import { ICounter } from '../../redux/counters/types';

export const getIdByLastElement = (items: ICounter[]) => {
  if (items.length === 0) {
    return 1;
  }

  const lastElement = items.length;

  return items[lastElement - 1].id + 1;
};
