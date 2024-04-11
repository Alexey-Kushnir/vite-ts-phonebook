import { useAppSelector } from '../hooks';

import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../reduxFiles';

export const useAuth = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const user = useAppSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
