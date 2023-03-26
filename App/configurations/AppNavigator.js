import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import BookDetailsScreen from '../screens/BookDetailsScreen';
import BookScreen from '../screens/BookScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  console.log('AppNavigator');
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BookScreen"
          component={BookScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BookDetailsScreen"
          component={BookDetailsScreen}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
