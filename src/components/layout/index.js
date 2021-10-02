import React from 'react';

import {StatusBar, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import PropTypes from 'prop-types';
import {useDefaultContext} from '@utils/contexts';
import colors from '@utils/themes/colors';

const Layout = ({fullscreen, scrollable, children}) => {
  const [{theme}, _] = useDefaultContext();
  return !fullscreen ? (
    <SafeAreaView>
      <StatusBar
        barStyle={`${theme === 'DARK' ? 'light' : 'dark'}-content`}
        backgroundColor={colors[theme].BACKGROUND}
      />
      {scrollable ? (
        <ScrollView keyboardShouldPersistTaps="always">{children}</ScrollView>
      ) : (
        children
      )}
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
