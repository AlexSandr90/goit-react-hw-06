import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    name: '',
  },
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter(state, { payload }) {
      state.filters.name = payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const selectedNameFilter = (state) => state.filters.filters.name;
export default filtersSlice.reducer;
