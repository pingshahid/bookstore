import {Provider} from 'react-redux';

import React from 'react';
import {SafeAreaView} from 'react-native';
import {store} from './store';
import AppNavigator from './AppNavigator';

export const Root = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </SafeAreaView>
  );
};
