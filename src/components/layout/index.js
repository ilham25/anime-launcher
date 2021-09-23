import React from 'react';
import {View, Text, StatusBar, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Layout = ({fullscreen, scrollable, children}) => {
  return !fullscreen ? (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      {scrollable ? <ScrollView>{children}</ScrollView> : children}
    </SafeAreaView>
  ) : (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      {scrollable ? <ScrollView>{children}</ScrollView> : children}
    </>
  );
};

export default Layout;
