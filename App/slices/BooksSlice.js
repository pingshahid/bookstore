import {createSlice} from '@reduxjs/toolkit';
import {fetchBooks} from '../api/books';

const BooksSlice = createSlice({
  name: 'books',
  initialState: {
    data: null,
    isLoader: false,
    isError: false,
  },
  extraReducers: builder => {
    builder.addCase(fetchBooks.pending, (state, action) => {
      state.isLoader = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});

export default BooksSlice.reducer;
