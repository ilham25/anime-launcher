import React from 'react';

import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CodePush from 'react-native-code-push';

import {DefaultContextProvider} from '@utils/contexts';
import RootNavigator from '@navigations/root';

let codePushOptions = {checkFrequency: CodePush.CheckFrequency.MANUAL};

const App = () => {
  return (
    <DefaultContextProvider>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </DefaultContextProvider>
  );
};

export default CodePush(codePushOptions)(App);
