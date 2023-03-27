import {ActivityIndicator, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {browseBookByName} from '../api/books';
import {BOOKS_TITLE} from '../envs/books.json';
import BookCommonCarouselComponent from './BookCommonCarouselComponent';
import {styles} from '../styleSheet/BookInfoStylesheet';

const BookScreenBrowseByNameComponent = navigation => {
  const dispatch = useDispatch();
  const root = useSelector(state => state);
  const books = root?.books_by_name;

  useEffect(() => {
    dispatch(browseBookByName(BOOKS_TITLE));
  }, []);

  return (
    <View>
      {books?.isLoader ? (
        <ActivityIndicator animating={books?.isLoader} color="black" />
      ) : (
        <View style={styles.alingCenter}>
          <View>
            <Text>Browse book by name {BOOKS_TITLE}</Text>
          </View>
          <BookCommonCarouselComponent books={books} navigation={navigation} />
        </View>
      )}
    </View>
  );
};

export default BookScreenBrowseByNameComponent;
