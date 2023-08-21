import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid';

const initialState = { contacts: [], filter: '' };

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

const phonebook = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.contacts.push(action.payload);
      },
      prepare: ({ name, number }) => {
        const id = nanoid(4);
        return { payload: { id, name, number } };
      },
    },
    deleteContact: (state, action) => {
      state.contacts = [
        ...state.contacts.filter(item => item.id !== action.payload),
      ];
    },
    filterContact: {
      reducer: (state, action) => {
        state.filter = action.payload;
      },
      prepare: e => {
        const filter = e.currentTarget.value;
        return { payload: filter };
      },
    },
  },
});

export const phonebookReducer = persistReducer(
  persistConfig,
  phonebook.reducer
);

export const { addContact, deleteContact, filterContact } = phonebook.actions;
