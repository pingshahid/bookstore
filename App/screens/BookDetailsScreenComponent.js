import {Text, View} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import FastImage from 'react-native-fast-image';
import {styles} from './BookInfoStylesheet';

const BookDetailsScreenComponent = props => {
  const {book} = props?.route?.params;
  console.log('book', book);
  const url = useMemo(
    () => 'https://covers.openlibrary.org/b/isbn/' + book.isbn + '-L.jpg',
    [],
  );

  useEffect(() => {
    console.log('useEffectddd');
  }, []);
  // console.log(JSON.stringify(books));

  return (
    <View>
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
    </View>
  );
};

export default BookDetailsScreenComponent;
