import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      if (action.payload === 'Under construction') {
        state.categories = 'Under construction';
      }
    },
  },

});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
