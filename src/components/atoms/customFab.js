import React from 'react';

import {View, Text, Pressable} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import colors from '@utils/themes/colors';

const CustomFab = ({
  style,
  icon = 'add',
  onPress = () => {},
  size = 36,
  small,
  backgroundColor,
}) => {
  return (
    <View
      style={{
        borderRadius: 75,
        overflow: 'hidden',
        position: 'absolute',
        bottom: style ? undefined : 25,
        right: style ? undefined : 25,
        elevation: 5,
        ...style,
      }}>
      <Pressable
        style={{
          height: (!small ? 40 : 5) + size,
          width: (!small ? 40 : 5) + size,
          backgroundColor: !backgroundColor ? colors.PRIMARY : backgroundColor,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        android_ripple={{color: colors.GRAY_LIGHT}}
        onPress={onPress}>
        <Icons name={icon} size={size} color="white" />
      </Pressable>
    </View>
  );
};

export default CustomFab;
