import React from 'react';

import {View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import BookInfoComponent from './BookInfoComponent';

const BookCommonCarouselComponent = props => {
  const {books, navigation} = props;

  return (
    <View>
      {books?.data?.length > 0 && (
        <Carousel
          mode="parallax-horizontal"
          width={375}
          height={200}
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

export default BookCommonCarouselComponent;
