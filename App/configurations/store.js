import {configureStore} from '@reduxjs/toolkit';
import BookReducer from '../slices/BooksSlice';
import BookSearchReducer from '../slices/BooksSearchSlice';
import AuthorReducer from '../slices/AuthorSlice';
export const store = configureStore({
  reducer: {
    author_books: BookReducer,
    book_search: BookSearchReducer,
    author: AuthorReducer,
  },
});
