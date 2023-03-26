import {createSlice} from '@reduxjs/toolkit';
import {browseBookByName} from '../api/books';

const BooksBrowseByNameSlice = createSlice({
  name: 'book_browse_by_name',
  initialState: {
    data: [],
    isLoader: false,
    isError: false,
  },
  extraReducers: builder => {
    builder.addCase(browseBookByName.pending, (state, action) => {
      state.isLoader = true;
    });
    builder.addCase(browseBookByName.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    });
    builder.addCase(browseBookByName.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});

export default BooksBrowseByNameSlice.reducer;
