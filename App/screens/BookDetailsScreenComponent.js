import {View} from 'react-native';
import React from 'react';
import BookInfoComponent from './BookInfoComponent';

const BookDetailsScreenComponent = props => {
  const {book} = props?.route?.params;

  return (
    <View>
      <BookInfoComponent book={book} />
    </View>
  );
};

export default BookDetailsScreenComponent;
