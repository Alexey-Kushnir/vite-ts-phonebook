import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface ContactData {
  name: string;
  number: string;
}

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        return thunkAPI.rejectWithValue(e.message);
      } else {
        console.log(e);
      }
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }: ContactData, thunkAPI) => {
    try {
      const res = await axios.post('/contacts', { name, number });
      return res.data;
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        return thunkAPI.rejectWithValue(e.message);
      } else {
        console.log(e);
      }
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId: string, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${contactId}`);
      return res.data;
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        return thunkAPI.rejectWithValue(e.message);
      } else {
        console.log(e);
      }
    }
  }
);

//TODO:
// export const updateContact = createAsyncThunk(
//   'contacts/updateContact',
//   async ({ contactId, name, phone }, thunkAPI) => {
//     try {
//       const res = await axios.patch(`/contacts/${contactId}`, {
//         name,
//         phone,
//       });
//       return res.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
