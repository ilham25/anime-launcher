import React from 'react';
import {View, Text, Dimensions} from 'react-native';

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

export default HomeContainer;
