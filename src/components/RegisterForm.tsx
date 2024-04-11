import { FC, FormEvent } from 'react';
import { useAppDispatch } from '../hooks';
import toast from 'react-hot-toast';
import { registerUser } from '../reduxFiles';
import { Button, TextField } from '@mui/material';

interface CustomElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
  confirm: HTMLInputElement;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

export const RegisterForm: FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<CustomForm>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.elements.password.value === form.elements.confirm.value) {
      dispatch(
        registerUser({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      form.reset();
      toast.success('Successfully created!');
    } else {
      toast.error('This is an error!');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete='off'
      style={{
        width: 320,
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
      }}
    >
      <TextField
        type='text'
        name='name'
        label='Username'
        size='small'
        sx={{
          height: 22,
          fontSize: 16,
        }}
        variant='outlined'
        required
      />
      <TextField
        type='email'
        name='email'
        label='Email'
        size='small'
        sx={{
          height: 22,
          fontSize: 16,
        }}
        variant='outlined'
        required
      />
      <TextField
        type='password'
        name='password'
        label='Password'
        size='small'
        sx={{
          height: 22,
          fontSize: 16,
        }}
        variant='outlined'
        required
      />
      <TextField
        type='password'
        name='confirm'
        label='Confirm'
        size='small'
        sx={{
          height: 22,
          fontSize: 16,
        }}
        variant='outlined'
        required
      />
      <Button
        type='submit'
        variant='contained'
        size='medium'
        sx={{
          fontSize: '14px',
          marginLeft: '10px',
          fontWeight: 'bold',
          width: '150px',
          ml: 0,
        }}
      >
        Register
      </Button>
    </form>
  );
};
