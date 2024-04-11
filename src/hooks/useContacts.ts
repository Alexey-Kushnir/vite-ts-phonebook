import { useAppSelector } from '../hooks';
import { selectVisibleContacts } from '../reduxFiles';

export const useContacts = () => {
  return useAppSelector(selectVisibleContacts);
};
