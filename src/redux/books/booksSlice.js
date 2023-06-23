import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const API_KEY = '3jGBFyMfV9aLGeBO5IhU';
const URL = `${API_BASE}/apps/${API_KEY}/books`;

const initialState = {
books: [],
isLoading: false,
};

// fetch books
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
try {
const books = await axios.get(URL);
const result = books.data;
const array = Object.keys(result).map((key) => ({
item_id: key,
...result[key][0],
}));
return array;
} catch (error) {
throw new Error('Error : Faild to fetch books');
}
});

// add a book
export const addBook = createAsyncThunk('books/addBook', async (bookToAdd) => {
try {
const resp = await axios.post(URL, bookToAdd);
return resp.data;
} catch (error) {
throw new Error('Failed to add');

}
});

// delete a book
export const deleteBook = createAsyncThunk('books/deleteBook', async (id) => {
try {
await axios.delete(`${URL}/${id}`);
return ('book was delete');
} catch (error) {
throw new Error('Failed to remove');
}
});

const booksSlice = createSlice({
name: 'books',
initialState,
extraReducers: (builder) => {
builder
.addCase(fetchBooks.pending, (state) => {
state.isLoading = true;
})
.addCase(fetchBooks.fulfilled, (state, action) => {
state.isLoading = false;
state.books = action.payload;
state.books.sort((a, b) => a.title.localeCompare(b.title));
})
.addCase(fetchBooks.rejected, (state) => {
state.isLoading = false;
})
.addCase(addBook.pending, (state) => {
state.isLoading = true;
})
.addCase(addBook.fulfilled, (state, action) => {
state.books.push({

id: action.meta.arg.item_id,
...action.meta.arg,
});
state.books.sort((a, b) => a.title.localeCompare(b.title));
})
.addCase(addBook.rejected, (state) => {
state.isLoading = false;
})
.addCase(deleteBook.pending, (state) => {
state.isLoading = true;
})
.addCase(deleteBook.fulfilled, (state, action) => {
state.isLoading = false;
state.books = state.books.filter((book) => book.item_id !== action.meta.arg);
});
},
});

export default booksSlice.reducer;