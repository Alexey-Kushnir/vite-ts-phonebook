import { useAppSelector } from '../hooks';
import { selectFilter } from '../reduxFiles';

export const useFilter = () => {
  return useAppSelector(selectFilter);
};
