import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchBooks = createAsyncThunk('fetchBooks', async () => {
  const res = await fetch(
    'https://openlibrary.org/works/OL45804W/editions.json',
  );
  const final = await res.json();
  const array = final?.entries;

  const parsedArray = [];
  array.forEach(element => {
    parsedArray.push({
      key: element?.key,
      title: element?.title,
      isbn: element?.isbn_13?.[0],
      author_key: element?.author_key?.[0],
      author_name: element?.author_name?.[0],
    });
  });
  return final;
});

export const searchBooks = createAsyncThunk('searchBooks', async searchText => {
  const url =
    'https://openlibrary.org/search.json?title=' + searchText + '&page=1';
  const res = await fetch(url);
  const final = await res.json();
  const array = final?.docs;
  const parsedArray = [];
  array.forEach(element => {
    parsedArray.push({
      key: element?.key,
      title: element?.title,
      isbn: element?.isbn?.[0],
      author_key: element?.author_key?.[0],
      author_name: element?.author_name?.[0],
    });
  });
  return parsedArray;
});
