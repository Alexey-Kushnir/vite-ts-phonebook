import { FC } from 'react';
import { useAppDispatch } from '../hooks';
import { deleteContact } from '../reduxFiles';
import { Button, Typography } from '@mui/material';
import { toast } from 'react-hot-toast';

interface Props {
  id: string;
  name: string;
  number: string;
}

export const ContactItem: FC<Props> = ({ id, name, number }) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
    toast.success(`Contact ${name} was deleted.`);
  };

  return (
    <li>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography
          variant='body1'
          sx={{
            fontSize: '22px',
            fontWeight: 'normal',
          }}
        >
          {name}: {number}
        </Typography>
        <Button
          onClick={handleDelete}
          variant='contained'
          size='small'
          color='secondary'
          sx={{
            fontSize: '10px',
            fontWeight: 'normal',
            marginLeft: 'auto',
          }}
        >
          Delete
        </Button>
      </div>
    </li>
  );
};
