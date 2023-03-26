import React, {useMemo} from 'react';

import {View, Text} from 'react-native';
import {styles} from './BookInfoStylesheet';
import FastImage from 'react-native-fast-image';

const BookInfoComponent = props => {
  const {book} = props;
  const url = useMemo(
    () => 'https://covers.openlibrary.org/b/isbn/' + book.isbn + '-L.jpg',
    [],
  );

  console.log('url', url);
  return (
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
  );
};

export default BookInfoComponent;
