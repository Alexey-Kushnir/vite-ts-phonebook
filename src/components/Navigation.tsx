import { FC } from 'react';
import { useAuth } from '../hooks';
import { NavLink } from 'react-router-dom';
import { Link } from '@mui/material';

export const Navigation: FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link
        component={NavLink}
        to='/'
        sx={{
          display: 'inline-block',
          textDecoration: 'none',
          padding: '12px',
          fontWeight: 700,
          color: '#2a363b',
          '&.active': {
            color: '#e84a5f',
          },
        }}
      >
        Home
      </Link>
      {isLoggedIn && (
        <Link
          component={NavLink}
          to='/contacts'
          sx={{
            display: 'inline-block',
            textDecoration: 'none',
            padding: '12px',
            fontWeight: 700,
            color: '#2a363b',
            '&.active': {
              color: '#e84a5f',
            },
          }}
        >
          Contacts
        </Link>
      )}
    </nav>
  );
};
