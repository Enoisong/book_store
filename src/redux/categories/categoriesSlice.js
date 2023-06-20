import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'Categories',
  initialState,
  reducers: {
    updaateCategories: (state, action) => {
      state.categories = action.payload === 'Under Construction' ? 'Under Construction' : state.categories;
    },
  },
});

export const { updateCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
