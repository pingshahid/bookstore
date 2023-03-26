import {ActivityIndicator, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {searchBooks} from '../api/books';
import {SearchBar} from 'react-native-elements';
import Carousel from 'react-native-reanimated-carousel';
import BookInfoComponent from './BookInfoComponent';

const BookScreenComponent = navigation => {
  console.log('sssddd');
  const dispatch = useDispatch();
  const books = useSelector(state => state.book_search);
  const [search] = useState(null);

  const onTextChange = event => {
    console.log('event.nativeEvent.text', event.nativeEvent.text);
    dispatch(searchBooks(event.nativeEvent.text));
  };

  useEffect(() => {
    console.log('useEffect');
    // dispatch(fetchBooks());
  }, []);
  // console.log(JSON.stringify(books));

  return (
    <View>
      <SearchBar
        placeholder="Search Books"
        onEndEditing={onTextChange}
        value={search}
      />
      {books.isLoader ? (
        <ActivityIndicator animating={books.isLoader} color="black" />
      ) : (
        <Carousel
          mode="parallax-horizontal"
          width={390}
          height={375}
          data={books?.data}
          scrollAnimationDuration={1000}
          onSnapToItem={index => console.log('current index:', index)}
          renderItem={({index}) => (
            <BookInfoComponent
              book={books?.data[index]}
              navigation={navigation}
            />
          )}
        />
      )}
    </View>
  );
};

export default BookScreenComponent;
