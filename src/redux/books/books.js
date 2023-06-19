import { createSlice } from '@reduxjs/toolkit';

export const books = createSlice({
  name: 'books',
  initialState: {
    books: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.books = [
        ...state.books,
        {
          id: Math.floor(Math.random() + 100),
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.id);
    },
  },
});

export const { addBook, removeBook } = books.actions;

export default books.reducer;
