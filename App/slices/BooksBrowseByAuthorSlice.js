import {createSlice} from '@reduxjs/toolkit';
import {fetchBooksByAuthor} from '../api/books';

const BooksBrowseByAuthorSlice = createSlice({
  name: 'author_books',
  initialState: {
    data: [],
    isLoader: false,
    isError: false,
  },
  extraReducers: builder => {
    builder.addCase(fetchBooksByAuthor.pending, (state, action) => {
      state.isLoader = true;
    });
    builder.addCase(fetchBooksByAuthor.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    });
    builder.addCase(fetchBooksByAuthor.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});

export default BooksBrowseByAuthorSlice.reducer;
