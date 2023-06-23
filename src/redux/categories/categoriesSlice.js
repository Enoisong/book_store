import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under Construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      state.status = 'Under construction';
    },
  },
});

export default categoriesSlice.reducer;
