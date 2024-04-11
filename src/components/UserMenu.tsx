import { FC } from 'react';
import { logOutUser } from '../reduxFiles';
import { useAuth } from '../hooks';
import { Button } from '@mui/material';
import { useAppDispatch } from '../hooks';

export const UserMenu: FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAuth();

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <p style={{ fontWeight: 700 }}>Welcome, {user.name}</p>
      <Button
        onClick={() => dispatch(logOutUser())}
        variant='contained'
        size='small'
        color='primary'
        sx={{
          fontSize: '10px',
          marginLeft: '10px',
          fontWeight: 'bold',
          float: 'right',
        }}
      >
        Logout
      </Button>
    </div>
  );
};
