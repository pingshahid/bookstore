import {createSlice} from '@reduxjs/toolkit';
import {searchBooks} from '../api/books';

const BooksSearchSlice = createSlice({
  name: 'book_search',
  initialState: {
    data: [],
    isLoader: false,
    isError: false,
  },
  extraReducers: builder => {
    builder.addCase(searchBooks.pending, (state, action) => {
      state.isLoader = true;
    });
    builder.addCase(searchBooks.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    });
    builder.addCase(searchBooks.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});

export default BooksSearchSlice.reducer;
