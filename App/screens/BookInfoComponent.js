import React, {useCallback, useMemo} from 'react';

import {View, Text, Pressable} from 'react-native';
import {styles} from '../styleSheet/BookInfoStylesheet';
import FastImage from 'react-native-fast-image';

const BookInfoComponent = props => {
  const {book, navigation} = props;
  const url = useMemo(
    () =>
      book.isbn
        ? 'https://covers.openlibrary.org/b/isbn/' + book.isbn + '-L.jpg'
        : 'https://covers.openlibrary.org/b/id/' + book.id + '-L.jpg',
    [book],
  );

  const navigateToDetailsScreen = useCallback(() => {
    navigation?.navigation?.navigate('Book Details', {
      book: book,
    });
  }, [navigation, book]);

  return (
    <Pressable onPress={() => navigateToDetailsScreen()}>
      <View style={styles.alingCenter}>
        <View style={styles.container}>
          <View>
            <FastImage
              source={require('../../assets/placeholder.png')}
              style={styles.placeHolderimage}
            />

            <FastImage
              style={styles.image}
              source={{
                uri: url,
              }}
            />
          </View>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode={'tail'}>
            {book.title || 'Not found'}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default BookInfoComponent;
