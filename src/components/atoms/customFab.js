import React from 'react';

import {View, Text, Pressable} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import colors from '@utils/themes/colors';

const CustomFab = ({style, icon = 'add'}) => {
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
          height: 75,
          width: 75,
          backgroundColor: colors.PRIMARY,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        android_ripple={{color: colors.GRAY_LIGHT}}>
        <Icons name={icon} size={36} color="white" />
      </Pressable>
    </View>
  );
};

export default CustomFab;
