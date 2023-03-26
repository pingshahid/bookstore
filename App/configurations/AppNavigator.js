import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import BookDetailsScreenComponent from '../screens/BookDetailsScreenComponent';
import BookScreenComponent from '../screens/BookScreenComponent';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BookScreenComponent"
          component={BookScreenComponent}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Book Details"
          component={BookDetailsScreenComponent}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
