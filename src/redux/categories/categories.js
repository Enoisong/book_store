import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

export const categories = createSlice({
  name: 'Categories',
  initialState,
  reducers: {
    updateCategories: (state, action) => {
      state.categories = action.payload === 'Under Construction' ? 'Under Construction' : state.categories;
    },
  },
});

export const { updateCategories } = categories.actions;
export default categories.reducer;
