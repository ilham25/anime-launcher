import React from 'react';

import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {DefaultContextProvider} from '@utils/contexts';
import RootNavigator from '@navigations/root';

const App = () => {
  return (
    <DefaultContextProvider>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </DefaultContextProvider>
  );
};

export default App;
