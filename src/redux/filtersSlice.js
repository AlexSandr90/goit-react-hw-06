import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    name: '',
  },
};

export const filtersSlice = createReducer(initialState, (builder) => {});
