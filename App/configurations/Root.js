import {Provider} from 'react-redux';

import React from 'react';
import {SafeAreaView} from 'react-native';
import {store} from './store';
import BookScreen from '../screens/BookScreen';

export const Root = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <BookScreen />
      </Provider>
    </SafeAreaView>
  );
};
