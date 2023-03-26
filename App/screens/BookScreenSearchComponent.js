import {ActivityIndicator, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {searchBooks} from '../api/books';
import {SearchBar} from 'react-native-elements';
import BookCommonCarouselComponent from './BookCommonCarouselComponent';

const BookScreenSearchComponent = navigation => {
  const dispatch = useDispatch();
  const root = useSelector(state => state);
  const books = root?.book_search;
  const [search] = useState(null);

  const onTextChange = event => {
    dispatch(searchBooks(event.nativeEvent.text));
  };

  const onClear = () => {
    console.log('event');
  };

  useEffect(() => {}, []);
  return (
    <View>
      <SearchBar
        placeholder="Search Books"
        onEndEditing={onTextChange}
        onClear={onClear}
        value={search}
      />
      {books?.isLoader ? (
        <ActivityIndicator animating={books?.isLoader} color="black" />
      ) : (
        <BookCommonCarouselComponent books={books} navigation={navigation} />
      )}
    </View>
  );
};

export default BookScreenSearchComponent;
