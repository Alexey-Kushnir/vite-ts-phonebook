import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from '@mui/material';

export const AuthNav: FC = () => {
  return (
    <div>
      <Link
        component={NavLink}
        to='/register'
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
        Register
      </Link>
      <Link
        component={NavLink}
        to='/login'
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
        Log In
      </Link>
    </div>
  );
};
