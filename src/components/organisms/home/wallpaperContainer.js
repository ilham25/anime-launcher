import React from 'react';

import {View, Dimensions} from 'react-native';
import PropTypes from 'prop-types';

const Window = Dimensions.get('window');

const WallpaperContainer = ({children}) => {
  return (
    <View style={{height: Window.height, position: 'relative'}}>
      {children}
    </View>
  );
};

WallpaperContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WallpaperContainer;
