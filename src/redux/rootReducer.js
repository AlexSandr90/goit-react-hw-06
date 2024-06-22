import { combineSlices } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';

export const rootReducer = combineSlices({
  contacts: contactsReducer,
});
