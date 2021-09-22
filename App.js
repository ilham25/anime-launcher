import React from 'react';

import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper';

import {DefaultContextProvider} from '@utils/contexts';
import RootNavigator from '@navigations/root';
import {theme} from '@utils/themes/customTheme';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <DefaultContextProvider>
        <SafeAreaProvider>
          <RootNavigator />
        </SafeAreaProvider>
      </DefaultContextProvider>
    </PaperProvider>
  );
};

export default App;
