import { FC, ReactNode } from 'react';
import { useAuth } from '../hooks';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute: FC<{
  component: ReactNode;
  redirectTo: string;
}> = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
