import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const extraActions = [fetchContacts, addContact, deleteContact];

interface Contact {
  id: string;
  name: string;
  number: string;
}

interface ContactsState {
  items: Contact[];
  isLoading: boolean;
  error: null | object;
}

const initialState: ContactsState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(
        fetchContacts.fulfilled,
        (state, action: PayloadAction<Contact[]>) => {
          state.items = action.payload;
        }
      )
      .addCase(
        addContact.fulfilled,
        (state, action: PayloadAction<Contact>) => {
          state.items.push(action.payload);
        }
      )
      .addCase(deleteContact.fulfilled, (state, action) => {
        const newArr = state.items.filter((item) => {
          return item.id !== action.payload.id;
        });
        state.items = newArr;
      })
      //TODO:
      // .addCase(updateContact.fulfilled, (state, action) => {})
      .addMatcher(
        isAnyOf(...extraActions.map((actions) => actions.pending)),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(...extraActions.map((actions) => actions.rejected)),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload as object;
        }
      )
      .addMatcher(
        isAnyOf(...extraActions.map((actions) => actions.fulfilled)),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      ),
});

export const contactsReducer = contactsSlice.reducer;
