import {ActivityIndicator, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchAuthorDetails,
  fetchBooksByAuthor,
  searchBooks,
} from '../api/books';
import {SearchBar} from 'react-native-elements';
import Carousel from 'react-native-reanimated-carousel';
import BookInfoComponent from './BookInfoComponent';

const BookScreenComponent = navigation => {
  const dispatch = useDispatch();
  const root = useSelector(state => state);
  const books = root?.author_books;
  const author = root?.author;
  const [search] = useState(null);

  const onTextChange = event => {
    dispatch(searchBooks(event.nativeEvent.text));
  };

  const onClear = () => {
    console.log('event');
  };

  useEffect(() => {
    dispatch(fetchAuthorDetails());
    dispatch(fetchBooksByAuthor());
  }, []);
  console.log('books11', JSON.stringify(root));

  return (
    <View>
      <SearchBar
        style={{width: 375}}
        placeholder="Search Books"
        onEndEditing={onTextChange}
        onClear={onClear}
        value={search}
      />
      {books?.isLoader ? (
        <ActivityIndicator animating={books?.isLoader} color="black" />
      ) : (
        <View style={{alignItems: 'center'}}>
          <View>
            <Text>Browse book by author {author?.data?.name}</Text>
          </View>
          <Carousel
            mode="parallax-horizontal"
            width={375}
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
        </View>
      )}
    </View>
  );
};

export default BookScreenComponent;
