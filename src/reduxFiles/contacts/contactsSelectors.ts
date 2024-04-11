import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export const selectContacts = (state: RootState) => state.contacts.items;
export const selectFilter = (state: RootState) => state.filter;
export const selectIsLoading = (state: RootState) => state.contacts.isLoading;
export const selectError = (state: RootState) => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
