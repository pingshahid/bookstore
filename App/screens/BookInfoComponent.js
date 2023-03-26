import React, {useCallback, useMemo} from 'react';

import {View, Text, Pressable} from 'react-native';
import {styles} from '../styleSheet/BookInfoStylesheet';
import FastImage from 'react-native-fast-image';

const BookInfoComponent = props => {
  const {book, navigation} = props;
  const url = useMemo(
    () => 'https://covers.openlibrary.org/b/isbn/' + book.isbn + '-L.jpg',
    [],
  );
  const navigateToDetailsScreen = useCallback(() => {
    navigation?.navigation.navigate('Book Details', {
      book: book,
    });
  }, [navigation, book]);

  console.log('url', url);
  return (
    <Pressable onPress={() => navigateToDetailsScreen()}>
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
              cache: FastImage.cacheControl.cacheOnly,
            }}
          />
        </View>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode={'tail'}>
          {book.title || 'Not found'}
        </Text>
      </View>
    </Pressable>
  );
};

export default BookInfoComponent;
