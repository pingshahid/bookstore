import {configureStore} from '@reduxjs/toolkit';
import BookReducer from '../slices/BooksSlice';
import BookSearchReducer from '../slices/BooksSearchSlice';
export const store = configureStore({
  reducer: {
    books: BookReducer,
    book_search: BookSearchReducer,
  },
});
