import React, {useState, useEffect} from 'react';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '@screens/splash';
import AppNav from './app';
import {useDefaultContext} from '@utils/contexts';
import colors from '@utils/themes/colors';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const [loading, setLoading] = useState(true);
  const [{theme}, _] = useDefaultContext();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const myTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      text: '#080522',
      background: colors[theme].BACKGROUND,
    },
  };

  return (
    <NavigationContainer theme={myTheme}>
      <Stack.Navigator>
        {loading ? (
          <Stack.Screen
            name="splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="App"
            component={AppNav}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
