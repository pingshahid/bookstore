import {createSlice} from '@reduxjs/toolkit';
import {fetchAuthorDetails} from '../api/books';

const AuthorSlice = createSlice({
  name: 'author',
  initialState: {
    data: [],
    isLoader: false,
    isError: false,
  },
  extraReducers: builder => {
    builder.addCase(fetchAuthorDetails.pending, (state, action) => {
      state.isLoader = true;
    });
    builder.addCase(fetchAuthorDetails.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    });
    builder.addCase(fetchAuthorDetails.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});

export default AuthorSlice.reducer;
