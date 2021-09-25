import fonts from '@utils/fonts';
import colors from '@utils/themes/colors';
import React from 'react';
import {View, Text, Pressable} from 'react-native';

const ButtonComponent = ({
  onPress = () => {},
  label = 'Pilih',
  backgroundColor = colors.YELLOW,
  style = {},
  disabled,
}) => {
  return (
    <View
      style={{
        borderRadius: 4,
        overflow: 'hidden',
        marginBottom: 5,
      }}>
      <Pressable
        style={{
          height: 35,
          backgroundColor: disabled ? colors.GRAY_LIGHT : backgroundColor,
          paddingHorizontal: 25,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
          ...style,
        }}
        android_ripple={{color: colors.GRAY_LIGHT}}
        onPress={onPress}
        disabled={disabled}>
        <Text
          style={{
            fontFamily: fonts.regular400,
            color: disabled ? colors.GRAY : colors.WHITE,
            fontSize: 14,
          }}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
};

export default ButtonComponent;
