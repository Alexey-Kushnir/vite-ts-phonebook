import { FC } from 'react';
import { useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from '../hooks';
import { selectContacts, addContact } from '../reduxFiles';
import { Button, TextField } from '@mui/material';
import { toast } from 'react-hot-toast';

interface ContactData {
  name: string;
  number: string;
}

export const ContactsForm: FC = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);

  const formik = useFormik<ContactData>({
    initialValues: {
      name: '',
      number: '',
    },
    onSubmit: ({ name, number }, { resetForm }) => {
      if (
        contacts.find(
          (contact) => contact.name.toLowerCase() === name.toLowerCase()
        )
      ) {
        return toast.error(`${name} is already in contacts.`);
      }
      dispatch(addContact({ name, number }));
      toast.success('Contact successfully created!');
      return resetForm();
    },
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        autoComplete='off'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '10px',
        }}
      >
        <TextField
          label='Name'
          size='small'
          sx={{ height: 22, fontSize: 16, mb: '20px', minWidth: '352px' }}
          variant='outlined'
          type='text'
          name='name'
          value={formik.values.name}
          onChange={formik.handleChange}
          inputProps={{
            pattern:
              "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
          }}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <TextField
          label='Phone'
          size='small'
          sx={{ height: 22, fontSize: 16, mb: '20px', minWidth: '352px' }}
          type='tel'
          name='number'
          value={formik.values.number}
          onChange={formik.handleChange}
          inputProps={{
            pattern:
              '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
          }}
          title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
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
            ml: 0,
          }}
        >
          Add contact
        </Button>
      </form>
    </>
  );
};
