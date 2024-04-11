import { FC, useEffect, lazy } from 'react';
import { useAppDispatch } from '../hooks';
import { Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from '../reduxFiles';
import { useAuth } from '../hooks';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#37474f',
    },
  },
  typography: {
    body1: {
      color: '#37474f',
    },
    h2: {
      color: '#1976d2',
    },
  },
});

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path='/register'
            element={
              <RestrictedRoute
                component={<RegisterPage />}
                redirectTo='/contacts'
              />
            }
          />
          <Route
            path='/login'
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo='/contacts'
              />
            }
          />
          <Route
            path='/contacts'
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo='/login' />
            }
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
