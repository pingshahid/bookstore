import {createAsyncThunk} from '@reduxjs/toolkit';
import {API_URL, AUTHOR_ID} from '../envs/books.json';

export const fetchAuthorDetails = createAsyncThunk(
  'fetchAuthorDetails',
  async () => {
    const res = await fetch(API_URL + 'authors/' + AUTHOR_ID + '.json');
    const final = await res.json();

    const parsedObject = {};
    parsedObject.name = final?.name;
    parsedObject.title = final?.title;
    parsedObject.birth_date = final?.birth_date;
    parsedObject.bio = final?.bio;
    return parsedObject;
  },
);

export const fetchBooksByAuthor = createAsyncThunk(
  'fetchBooksByAuthor',
  async () => {
    const res = await fetch(API_URL + 'authors/' + AUTHOR_ID + '/works.json');
    const final = await res.json();
    const array = final?.entries;

    const parsedArray = [];
    array.forEach(element => {
      parsedArray.push({
        key: element?.key,
        title: element?.title,
        id: element?.covers?.[0],
        author_key: element?.authors?.[0]?.author?.key,
      });
    });
    return parsedArray;
  },
);

export const searchBooks = createAsyncThunk('searchBooks', async searchText => {
  const url = API_URL + '/search.json?title=' + searchText + '&page=1';
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
