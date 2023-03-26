import {configureStore} from '@reduxjs/toolkit';
import BooksBrowseByAuthorReducer from '../slices/BooksBrowseByAuthorSlice';
import BookSearchReducer from '../slices/BooksSearchSlice';
import AuthorReducer from '../slices/AuthorSlice';
import BooksBrowseByNameReducer from '../slices/BooksBrowseByNameSlice';
export const store = configureStore({
  reducer: {
    author_books: BooksBrowseByAuthorReducer,
    book_search: BookSearchReducer,
    author: AuthorReducer,
    books_by_name: BooksBrowseByNameReducer,
  },
});
