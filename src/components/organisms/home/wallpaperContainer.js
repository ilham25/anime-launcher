import React from 'react';
import {View, Dimensions} from 'react-native';

const Window = Dimensions.get('window');

const WallpaperContainer = ({children}) => {
  return (
    <View style={{height: Window.height, position: 'relative'}}>
      {children}
    </View>
  );
};

export default WallpaperContainer;
