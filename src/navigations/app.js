import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import AnimeDetailpage from '@screens/detail';
import HomePage from '@screens/home';
import FormPage from '@screens/home/form';

const Stack = createStackNavigator();

const AppNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AnimeDetailPage"
        component={AnimeDetailpage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FormPage"
        component={FormPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNav;
