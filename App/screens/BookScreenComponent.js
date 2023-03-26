import {ScrollView, View} from 'react-native';
import React from 'react';
import BookScreenSearchComponent from './BookScreenSearchComponent';
import BookScreenBrowseByAuthorComponent from './BookScreenBrowseByAuthorComponent';
import BookScreenBrowseByNameComponent from './BookScreenBrowseByNameComponent';
import {styles} from '../styleSheet/BookInfoStylesheet';

const BookScreenComponent = navigation => {
  return (
    <ScrollView style={styles.rootStyle}>
      <View>
        <BookScreenSearchComponent navigation={navigation?.navigation} />
        <BookScreenBrowseByAuthorComponent
          navigation={navigation?.navigation}
        />
        <BookScreenBrowseByNameComponent navigation={navigation?.navigation} />
      </View>
    </ScrollView>
  );
};

export default BookScreenComponent;
