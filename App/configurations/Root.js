import {Provider} from 'react-redux';

import React from 'react';
import {SafeAreaView} from 'react-native';
import {store} from './store';
import AppNavigator from './AppNavigator';
import {styles} from '../styleSheet/BookInfoStylesheet';

export const Root = () => {
  return (
    <SafeAreaView style={styles.rootStyle}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </SafeAreaView>
  );
};
