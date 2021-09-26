import React from 'react';

import {Dimensions, Image} from 'react-native';
import PropTypes from 'prop-types';

import images from '@assets/images';

const Window = Dimensions.get('window');

const Wallpaper = ({source, opacity = 0.1}) => {
  return (
    <Image
      source={source ? {uri: `file://${source}`} : images.wpExample}
      style={{
        width: Window.width,
        height: Window.height,
        resizeMode: 'cover',
        opacity,
      }}
    />
  );
};

Wallpaper.propTypes = {
  source: PropTypes.any,
  opacity: PropTypes.number,
};

export default Wallpaper;
