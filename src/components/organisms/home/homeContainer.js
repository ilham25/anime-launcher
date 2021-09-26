import React from 'react';

import {View, Dimensions} from 'react-native';
import PropTypes from 'prop-types';

const Window = Dimensions.get('window');

const HomeContainer = ({children, style}) => {
  return (
    <View
      style={{
        height: Window.height - 75,
        width: Window.width,
        position: 'absolute',
        top: 0,
        left: 0,
        padding: 20,
        ...style,
      }}>
      {children}
    </View>
  );
};

HomeContainer.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

export default HomeContainer;
