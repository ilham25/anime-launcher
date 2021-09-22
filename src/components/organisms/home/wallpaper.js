import React from 'react';

import {Dimensions, Image} from 'react-native';
import PropTypes from 'prop-types';

const Window = Dimensions.get('window');

const Wallpaper = ({source}) => {
  return (
    <Image
      source={source}
      style={{
        width: Window.width,
        height: Window.height,
        resizeMode: 'cover',
        opacity: 0.1,
      }}
    />
  );
};

Wallpaper.propTypes = {
  source: PropTypes.any.isRequired,
};

export default Wallpaper;
