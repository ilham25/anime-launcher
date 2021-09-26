import React from 'react';

import {StatusBar, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import PropTypes from 'prop-types';

const Layout = ({fullscreen, scrollable, children}) => {
  return !fullscreen ? (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      {scrollable ? <ScrollView>{children}</ScrollView> : children}
    </SafeAreaView>
  ) : (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      {scrollable ? <ScrollView>{children}</ScrollView> : children}
    </>
  );
};

Layout.propTypes = {
  fullscreen: PropTypes.bool,
  scrollable: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Layout;
