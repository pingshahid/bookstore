import {ActivityIndicator, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAuthorDetails, fetchBooksByAuthor} from '../api/books';
import BookCommonCarouselComponent from './BookCommonCarouselComponent';

const BookScreenBrowseByAuthorComponent = navigation => {
  const dispatch = useDispatch();
  const root = useSelector(state => state);
  const books = root?.author_books;
  const author = root?.author;

  useEffect(() => {
    dispatch(fetchAuthorDetails());
    dispatch(fetchBooksByAuthor());
  }, []);

  return (
    <View>
      {books?.isLoader ? (
        <ActivityIndicator animating={books?.isLoader} color="black" />
      ) : (
        <View style={{alignItems: 'center'}}>
          <View>
            <Text>Browse book by author {author?.data?.name}</Text>
          </View>
          <BookCommonCarouselComponent books={books} navigation={navigation} />
        </View>
      )}
    </View>
  );
};

export default BookScreenBrowseByAuthorComponent;
